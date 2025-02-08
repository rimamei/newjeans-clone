import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';
import { TGalleryType } from '@/types';

import ArrowLeft from '@/components/base/Icons/ArrowLeft';
import Download from '@/components/base/Icons/Download';
import Music from '@/components/base/Icons/Music';
import { bubbleGumAlbum, howSweetAlbum } from '@/constants/galleryImages';
import Navigation from './Navigation';
import style from './style.module.css';
import clsx from 'clsx';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';

interface GalleryProps {
  onBack: () => void;
  type: TGalleryType;
}

const Gallery = ({ onBack, type }: GalleryProps) => {
  const { togglePlayPause, isPlaying } = useAudioPlayer();

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentAlbum, setCurrentAlbum] = useState<typeof howSweetAlbum | []>(
    []
  );

  useEffect(() => {
    if (type === 'how-sweet') {
      setCurrentAlbum(howSweetAlbum);
    } else {
      setCurrentAlbum(bubbleGumAlbum);
    }
  }, [type]);

  return (
    <div className={clsx(style['gallery-container'], 'scale-in')}>
      <div className={style['top-bar']}>
        <button className={style['back']} onClick={onBack}>
          <ArrowLeft size={16} color="#000" />
          <p>Home</p>
        </button>
        <div className={style['right']}>
          <a
            href={currentAlbum.length > 0 ? currentAlbum[activeIndex].img : ''}
            download={
              currentAlbum.length > 0
                ? currentAlbum[activeIndex].name
                : 'default-img'
            }
            className={style['right']}
          >
            <button className={style['download']}>
              <Download size={16} color="#000" />
              <p>Download</p>
            </button>
          </a>
          <button
            onClick={togglePlayPause}
            className={
              isPlaying ? style.song : clsx(style.song, style['btn-play'])
            }
          >
            <Music size={16} color="#000" />
          </button>
        </div>
      </div>
      {currentAlbum.length > 0 ? (
        <Swiper
          className="relative-container"
          modules={[A11y]}
          spaceBetween={0}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          onSlideChange={(val) => setActiveIndex(val.activeIndex)}
        >
          {currentAlbum.map((item, index) => (
            <SwiperSlide className="relative-container" key={index}>
              <div className={style['img-container']}>
                <img
                  className={style['img-display']}
                  src={item.img}
                  alt={item.name}
                />
              </div>
            </SwiperSlide>
          ))}
          <Navigation />
        </Swiper>
      ) : null}
    </div>
  );
};

export default Gallery;
