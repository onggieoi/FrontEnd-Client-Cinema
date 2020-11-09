import React, { useState, useContext } from 'react';
import { Calendar } from 'react-feather';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

import { ModalContext } from 'contexts/Modal';
import { cinemaOptions } from 'helper/constant';
import { useSessionQuery, ScheduleTime, Theater } from 'graphql/generated';
import { AuthContext } from 'contexts/Auth';
import { formatDate, formatTime } from 'helper/funtions';

type Session = {
  __typename?: "ScheduleTime" | undefined;
} & Pick<ScheduleTime, "id" | "time" | "price"> & {
  theater?: ({
    __typename?: "Theater" | undefined;
  } & Pick<Theater, "name" | "id">) | null | undefined;
};

type Props = {
  movieId: number;
  movieName: string;
}

const SessionMovie: React.FC<Props> = ({ movieId, movieName }) => {
  const { isAuth } = useContext(AuthContext);
  const { onOpen, setProps, setComponent, props } = useContext(ModalContext);

  const [date, setDate] = useState(new Date);
  const [cinema, setCinema] = useState('');
  const [session, setSession] = useState(-1);

  const { data, loading, error } = useSessionQuery({
    variables: {
      options: {
        movieId: movieId,
        location: cinema,
        date: formatDate(date),
      }
    }
  });

  const activeSessionStyle = (id: number) => {
    if (id === session) return 'intro-y border w-full p-5 shadow-md my-2 rounded-md bg-theme-100 text-white font-bold';
    return 'intro-y border w-full p-5 shadow-md my-2 rounded-md hover:bg-theme-100 hover:text-white cursor-pointer font-bold';
  };

  const handleSession = (item: Session) => {
    setSession(item.id);
    setProps({
      ...props,
      scheduleTimeId: item.id,
      session: item.time,
      price: item.price,
      room: item.theater?.name,
      theaterId: item.theater?.id,
    })
  }

  const handleSubmit = () => {
    if (isAuth) {
      setComponent('PAYMENT');
      setProps({
        ...props,
        movieName,
        location: cinema,
        dateChoose: `${date.getDate()}/${date.getUTCMonth() + 1}/${date.getFullYear()}`,
      });
      onOpen();
    }
    else {
      setComponent('AUTH');
      onOpen();
    }

  };

  return (
    <>
      <div className='flex items-center'>
        {/* Calendar */}
        <div className='rounded-l w-10 h-10 flex items-center justify-center bg-gray-100 border text-gray-600'>
          <Calendar className='w-4 h-4' />
        </div>
        <DatePicker
          dateFormat='dd/MM/yyyy'
          className='input border ml-1 w-32 z-40'
          selected={date}
          onChange={(dateChange: any) => setDate(dateChange)}
          minDate={new Date()}
        />

        {/* Select */}
        <div className='ml-3 w-64 z-40'>
          <Select
            placeholder="Choose Cinema"
            options={cinemaOptions}
            onChange={(c) => {
              setCinema(c?.['value']);
              setProps({
                ...props,
                cinema: c?.['label'],
              });
            }
            }
          />
        </div>
      </div>

      {/* Session */}
      <div className='mt-5 mx-auto'>
        {
          data?.getTimesSession.map((item) => (
            <button onClick={() => handleSession(item)} key={item.id} className={activeSessionStyle(item.id)}>
              {formatTime(item.time)}
            </button>
          ))
        }
      </div>

      {
        session > 0 && (
          <div className='mx-auto w-64 mt-5'>
            <button onClick={handleSubmit}
              className='w-full py-3 border-2 border-theme-100 text-theme-100 
          font-bold hover:bg-theme-100 hover:text-white shadow-md text-lg'>
              Buy Ticket
            </button>
          </div>
        )
      }
    </>
  );
};

export default SessionMovie;
