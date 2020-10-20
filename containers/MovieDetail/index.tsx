import React, { useContext } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Clock } from 'react-feather';

import SessionMovie from 'containers/MovieDetail/SessionMovie';
import { CardData } from 'interfaces';
import Modal from 'components/Modal';
import Payment from 'containers/Modal/Payment';
import { ModalContext } from 'contexts/Modal';

interface Props {
  data: CardData;
}

const DetailMovie: React.FC<Props> = ({ data }) => {
  const { title, images } = data;
  const { isOpen, onClose, props } = useContext(ModalContext);

  return (
    <>
      {/* Header */}
      <div className='top-bar my-5'>
        <div className="-intro-x text-gradient font-bold text-2xl text-center w-full block">
          {title}
        </div>
      </div>

      {/* Left Side */}
      <div className="grid grid-cols-12 gap-6 mt-10 intro-x mx-auto" style={{ maxWidth: '1500px' }}>
        <div className='col-span-3 -intro-x'>
          <Carousel
            showStatus={false}
            swipeable
            infiniteLoop
            autoPlay
          >
            {
              images?.map((imgSrc) => (
                <div key={imgSrc} className='object-center w-full'>
                  <img src={imgSrc} />
                </div>
              ))
            }
          </Carousel>
        </div>

        {/* Mid Side */}
        <div className='col-span-5 intro-x mx-auto'>

          <div className='mb-3 font-bold'>
            <div className='text-6xl -mt-4'>SPUTNIK</div>
            <div className='text-2xl text-gray-600'>QUÁI VẬT SĂN ĐÊM</div>
            <div className='flex items-center mt-2'>
              <Clock />
              <div className='ml-2 text-lg'>
                114 phút
              </div>
            </div>
          </div>

          <div className='text-xl font-bold'>
            <div>Nhà sản xuất:  Art Pictures Studio</div>
            <div>Diễn viên:  Oksana Akinshina, Pyotr Fyodorov</div>
            <div>Thể loại:  Kinh Dị, Giả Tưởng</div>
            <div>Đạo diễn:  Egor Abramenko</div>
            <div>Quốc gia:  Nga</div>
            <div>Ngày:  15/10/2020</div>
          </div>
        </div>

        {/* right side */}
        <div className='col-span-4 -intro-y'>
          <SessionMovie />
        </div>

      </div>

      <Modal isOpen={isOpen} onClose={() => onClose()} Component={Payment} props={props} />
    </>
  );
};

export default DetailMovie;
