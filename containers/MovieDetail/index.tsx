import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Calendar, Clock } from 'react-feather';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

import { CardData } from 'interfaces';
import { Cinema } from 'dataEx';

interface Props {
  data: CardData;
}

const DetailMovie: React.FC<Props> = ({ data }) => {
  const { title, images } = data;
  const [date, setDate] = useState(new Date);

  const options = Cinema.map((item) => ({ label: item, value: item }));

  return (
    <>
      <div className='top-bar my-5'>
        <div className="-intro-x text-gradient font-bold text-2xl text-center w-full block">
          { title }
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mt-5 intro-x">
        <div className='col-span-4 -intro-x'>
          <Carousel
            showStatus={ false }
            swipeable
            infiniteLoop
            autoPlay
          >
            {
              images?.map((imgSrc) => (
                <div key={ imgSrc } className='object-center w-full'>
                  <img src={ imgSrc } />
                </div>
              ))
            }
          </Carousel>
        </div>

        <div className='col-span-3 intro-x'>
          <div className='mb-3 font-bold'>
            <div className='text-5xl -mt-4'>SPUTNIK</div>
            <div className='text-xl text-gray-600'>QUÁI VẬT SĂN ĐÊM</div>
            <div className='flex items-center mt-2'>
              <Clock />
              <div className='ml-2'>
                114 phút
              </div>
            </div>
          </div>
          <div>Nhà sản xuất:  Art Pictures Studio</div>
          <div>Diễn viên:  Oksana Akinshina, Pyotr Fyodorov</div>
          <div>Thể loại:  Kinh Dị, Giả Tưởng</div>
          <div>Đạo diễn:  Egor Abramenko</div>
          <div>Quốc gia:  Nga Ngày:  15/10/2020</div>
        </div>

        {/* right side */ }
        <div className='col-span-5 -intro-y'>
          <div className='flex items-center'>
            {/* Calendar */ }
            <div className='ml-10 rounded-l w-10 h-10 flex items-center justify-center bg-gray-100 border text-gray-600'>
              <Calendar className='w-4 h-4' />
            </div>
            <DatePicker
              className='input border ml-1 w-32'
              selected={ date }
              onChange={ (dateChange: any) => setDate(dateChange) }
            />

            {/* Select */ }
            <div className='ml-3 w-64'>
              <Select
                placeholder="Choose Cinema"
                options={ options }
              />
            </div>
          </div>

          {/* Session */ }
          <div className='mt-5 mx-auto' style={ { maxWidth: '200px' } }>
            <button className='border w-full p-5 shadow-md my-2 rounded-md hover:bg-theme-100 hover:text-white cursor-pointer font-bold'>
              7 PM
            </button>
          </div>

          <div className='mx-auto w-32 mt-5'>
            <button className='w-full px-5 py-1 border-2 border-theme-100 text-theme-100 font-bold hover:bg-theme-100 hover:text-white shadow-md'>
              Buy Ticket
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default DetailMovie;
