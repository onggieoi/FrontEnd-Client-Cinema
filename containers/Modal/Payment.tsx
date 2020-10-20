import React, { useState } from 'react';

import ProcessBar from 'components/ProcessBar';
import QRCode from 'qrcode.react';

import { PossitionEx } from 'dataEx';
import { Possition } from 'interfaces';

interface Props {
  session: string;
  cinema: string;
  dateChoose: string;
}

const Payment: React.FC<Props> = ({ session, cinema, dateChoose }) => {
  const [isLoading, setLoading] = useState(false);
  const [choosen, setChoosen] = useState([] as Possition[]);

  const handleChoose = (item: Possition) => {
    if (item.status) {
      return;
    }

    const remove = choosen.find((pos) => item.id === pos.id);
    if (remove) {
      const newChoose = choosen.filter((pos) => pos.id !== remove.id);
      setChoosen(newChoose);
      return;
    }

    setChoosen([...choosen, item]);
  };

  const possitionStyle = (item: Possition) => {
    if (item.status) return 'bg-theme-50 w-full text-white cursor-not-allowed';
    if (choosen.includes(item)) return 'bg-theme-100 w-full text-white cursor-pointer';
    return 'border border-theme-100 w-full cursor-pointer'
  };

  return (
    <div className='bg-white overflow-y-auto relative' style={{ width: '1000px', height: '90vh' }}>
      {
        isLoading && <ProcessBar />
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
            PossitionEx.map((pos) => (
              <div key={pos.id} className='intro-x col-span-2'>
                <button onClick={() => handleChoose(pos)} className={`${possitionStyle(pos)}`}>
                  {pos.name}
                </button>
              </div>
            ))
          }
        </div>
      </div>

      <div className='intro-x flex overflow-x-auto my-5 mx-auto p-5' style={{ maxWidth: '800px' }}>
        {
          choosen.map((item) => (
            <div key={item.id} className="intro-x ticket m-3">
              <div className="ticket__content p-5">
                <div>Cinema: {cinema}</div>
                <div>Name: not handle yet</div>
                <div>Price: not handle yet</div>
                <div>Possition: {item.name}</div>
                <div>Date: {dateChoose} {session}</div>
                <div>
                  {/* <QRCode value={'google.com'} /> */}
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
            <p className='text-center text-xl font-bold'>TOTAL: not handle yet</p>

            <div className='intro-y flex my-5'>
              <button
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
