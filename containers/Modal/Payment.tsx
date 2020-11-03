import React, { useState, useEffect } from 'react';
import { NotificationManager } from 'react-notifications';
import QRCode from 'qrcode.react';

import ProcessBar from 'components/ProcessBar';

import { useSeatsQuery, SeatRespone, Seat, useBuyTicketMutation } from 'graphql/generated';

type SeatType = {
  __typename?: "SeatRespone" | undefined;
} & Pick<SeatRespone, "isAvailable"> & {
  seat?: ({
    __typename?: "Seat" | undefined;
  } & Pick<Seat, "id" | "name" | "percent">) | null | undefined;
};

interface Props {
  session: string;
  cinema: string;
  dateChoose: string;
  movieName: string;
  price: number;
  room: string;
  location: string;
  scheduleTimeId: number;
  theaterId: number;
}

const Payment: React.FC<Props> = ({
  session, cinema, dateChoose, movieName, price, room, location, scheduleTimeId, theaterId,
}) => {
  const [choosen, setChoosen] = useState([] as SeatType[]);
  const [total, setTotal] = useState(0);
  const [loader, setLoader] = useState(false);

  const { data, loading, refetch } = useSeatsQuery({
    variables: {
      options: {
        theaterId,
        scheduleTimeId,
        location,
      }
    }
  });
  const [buyTicket] = useBuyTicketMutation();

  useEffect(() => {
    let totalRs = 0;
    choosen.forEach((item) => {
      totalRs += ((100 - (item.seat?.percent || 0)) * price) / 100;
    });
    setTotal(totalRs);
  }, [choosen]);

  const handleChoose = (item: SeatType) => {
    if (item.isAvailable) {
      return;
    }

    const remove = choosen.find((pos) => item.seat?.id === pos.seat?.id);

    if (remove) {
      const newChoose = choosen.filter((pos) => pos.seat?.id !== remove.seat?.id);
      setChoosen(newChoose);
      return;
    }

    setChoosen([...choosen, item]);
  };

  const possitionStyle = (item: SeatType) => {
    if (item.isAvailable) return 'bg-theme-50 w-full text-white cursor-not-allowed';
    if (choosen.includes(item)) return 'bg-theme-100 w-full text-white cursor-pointer';
    return 'border border-theme-100 w-full cursor-pointer'
  };

  const handleBuyTicket = async () => {
    setLoader(true);

    setTimeout(async () => {
      choosen.forEach(async (item) => {
        const result = await buyTicket({
          variables: {
            options: {
              location,
              seatId: item.seat?.id || -1,
              scheduleTimeId,
              price: ((100 - (item.seat?.percent || 0)) * price) / 100,
            }
          }
        });

        NotificationManager.success(
          `Seat: ${item.seat?.name} - ${((100 - (item.seat?.percent || 0)) * price) / 100} $`,
          'Buy Ticket Successful !',
          4000,
          () => {
            console.log('callBack fn');
          });

        if (!result.data?.buyTicket) {
          console.log('somthing wrong!');
          NotificationManager.error(
            `Seat: ${item.seat?.name} - ${((100 - (item.seat?.percent || 0)) * price) / 100} $`,
            'Something wrong !');
        }
      });

      await refetch();

      setChoosen([] as SeatType[]);
      setLoader(false);
    }, 1000);
  }

  return (
    <div className='bg-white overflow-y-auto overflow-x-hidden relative' style={{ width: '1000px', height: '90vh' }}>
      {
        (loading || loader) && (
          <div className='fixed' style={{ width: '985px' }}>
            <ProcessBar />
          </div>
        )
      }

      <h1 className='text-center text-2xl font-bold mt-5'>Payment</h1>

      <div className='border border-theme-50 my-5 w-11/12 mx-auto'></div>

      {/* possition */}
      <div className='mx-auto border border-theme-50 p-1' style={{ width: '700px' }}>
        <div className='bg-theme-100 mx-auto'>
          <p className='text-center text-white'>Screen</p>
        </div>

        <div className='intro-x grid grid-cols-10 gap-6 mt-24 mx-auto px-10'>
          {
            data?.seats.map((seat) => (
              <div key={seat.seat?.id} className='intro-x col-span-2'>
                <button onClick={() => handleChoose(seat)} className={`${possitionStyle(seat)}`}>
                  {seat.seat?.name}
                </button>
              </div>
            ))
          }
        </div>
      </div>

      <div className='intro-x flex overflow-x-auto my-5 mx-auto p-5' style={{ maxWidth: '800px' }}>
        {
          choosen.map((item) => (
            <div key={item.seat?.id} className="intro-x ticket m-3">
              <div className="ticket__content p-5 flex flex-col text-lg font-bold">
                <div>Cinema: {cinema}</div>
                <div>Room: {room}</div>
                <div>Name: {movieName}</div>
                <div>Price: {price} $</div>
                <div>Seat: {item.seat?.name}</div>
                <div>Date: {dateChoose} {session}</div>
                <div className='mx-auto mt-5'>
                  <QRCode
                    value={'google.com'}
                    size={150}
                  />
                </div>
              </div>
            </div>
          ))
        }

        <div className='block' style={{ minWidth: '1rem' }}></div>

      </div>

      {
        choosen.length ? (
          <>
            <p className='text-center text-xl font-bold'>TOTAL: {total} $</p>

            <div className='intro-y flex my-5'>
              <button onClick={handleBuyTicket}
                className='mx-auto py-5 w-64 border border-theme-100 font-bold
                hover:bg-theme-100 hover:text-white shadow-lg'>
                Confirm
            </button>
            </div>
          </>
        ) : null
      }

    </div>
  );
}

export default Payment;
