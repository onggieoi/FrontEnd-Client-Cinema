import React, { useContext } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Clock } from 'react-feather';

import SessionMovie from 'containers/MovieDetail/SessionMovie';
import Modal from 'components/Modal';
import { ModalContext } from 'contexts/Modal';
import { Movie, Maybe, Image } from 'graphql/generated';
import Payment from 'containers/Modal/Payment';
import AuthModal from 'containers/Modal/Auth';

type Props = {
  movie: {
    __typename?: "Movie" | undefined;
  } & Pick<Movie, "id" | "name" | "description" | "type" | "director" | "producer" | "country" | "duration" | "thumbnail" | "isShow">
  & {
    images?: Maybe<Array<(
      { __typename?: 'Image' }
      & Pick<Image, 'id' | 'url'>
    )>>
  }
}

const DetailMovie: React.FC<Props> = ({ movie }) => {
  const { isOpen, onClose, props, component } = useContext(ModalContext);

  return (
    <>
      {/* Header */}
      <div className='top-bar my-5'>
        <div className="-intro-x text-gradient font-bold text-2xl text-center w-full block">
          {movie.name}
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
              movie.images?.map(({ id, url }) => (
                <div key={id} className='object-center w-full'>
                  <img src={url} />
                </div>
              ))
            }
          </Carousel>
        </div>

        {/* Mid Side */}
        <div className='col-span-5 intro-x mx-auto'>

          <div className='mb-3 font-bold'>
            <div className='text-6xl -mt-4'>{movie.name}</div>
            <div className='flex items-center mt-2'>
              <Clock />
              <div className='ml-2 text-lg'>
                {movie.duration} minutes
              </div>
            </div>
          </div>

          <div className='text-xl font-bold'>
            <div>Producer:
              <span className='text-gray-600'> {movie.producer}</span>
            </div>
            <div>Genre:
              <span className='text-gray-600'> {movie.type}</span>
            </div>
            <div>Director:
              <span className='text-gray-600'> {movie.director}</span>
            </div>
            <div>Language:
              <span className='text-gray-600'> {movie.country}</span>
            </div>
            <div>Status:
              <span className='text-gray-600'> {movie.isShow ? 'Showing now' : 'Comming soon'}</span>
            </div>
            <div>Description:
              <div className='text-base text-gray-600'>{movie.description}</div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className='col-span-4 -intro-y'>
          <SessionMovie movieId={movie.id} movieName={movie.name} />
        </div>

      </div>

      <Modal isOpen={isOpen} onClose={() => onClose()}>
        {
          component === 'AUTH' && <AuthModal />
        }
        {
          component === 'PAYMENT' && <Payment {...props} />
        }
      </Modal>
    </>
  );
};

export default DetailMovie;
