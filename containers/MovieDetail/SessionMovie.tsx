import React, { useState } from 'react';
import { Calendar } from 'react-feather';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

import { Cinema, Session } from 'dataEx';

const SessionMovie = () => {
  const [date, setDate] = useState(new Date);
  const [cinema, setCinema] = useState('');
  const [session, setSession] = useState('');

  const activeSessionStyle = (id: string) => {
    if (id === session) return 'border w-full p-5 shadow-md my-2 rounded-md bg-theme-100 text-white font-bold';
    return 'border w-full p-5 shadow-md my-2 rounded-md hover:bg-theme-100 hover:text-white cursor-pointer font-bold';
  };

  const handleSubmit = () => {
    console.log({ session, cinema, dateChoose: `${date.getDate()}/${date.getUTCMonth() + 1}/${date.getFullYear()}` });
  };

  const options = Cinema.map((item) => ({ label: item, value: item }));

  return (
    <>
      <div className='flex items-center'>
        {/* Calendar */}
        <div className='rounded-l w-10 h-10 flex items-center justify-center bg-gray-100 border text-gray-600'>
          <Calendar className='w-4 h-4' />
        </div>
        <DatePicker
          className='input border ml-1 w-32'
          selected={date}
          onChange={(dateChange: any) => setDate(dateChange)}
        />

        {/* Select */}
        <div className='ml-3 w-64'>
          <Select
            placeholder="Choose Cinema"
            options={options}
            onChange={(c) => setCinema(c?.['value'])}
          />
        </div>
      </div>

      {/* Session */}
      <div className='mt-5 mx-auto'>
        {
          Session.map((item) => (
            <button onClick={() => setSession(item.id)} key={item.id} className={activeSessionStyle(item.id)}>
              {item.sesison}
            </button>
          ))
        }
      </div>

      <div className='mx-auto w-64 mt-5'>
        <button onClick={handleSubmit}
          className='w-full py-3 border-2 border-theme-100 text-theme-100 
          font-bold hover:bg-theme-100 hover:text-white shadow-md text-lg'>
          Buy Ticket
        </button>
      </div>
    </>
  );
};

export default SessionMovie;
