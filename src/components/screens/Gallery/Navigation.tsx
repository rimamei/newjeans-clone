import ArrowLeft2 from '@/components/base/Icons/ArrowLeft2';
import ArrowRight2 from '@/components/base/Icons/ArrowRight2';
import { useSwiper } from 'swiper/react';
import style from './style.module.css';

const Navigation = () => {
  const swiper = useSwiper();

  return (
    <div className={style['swiper-navigation']}>
      <button
        className={style['btn-prev-slide']}
        onClick={() => swiper.slidePrev()}
      >
        <ArrowLeft2 size={24} color="#a7a7a7" />
      </button>

      <button
        className={style['btn-next-slide']}
        onClick={() => swiper.slideNext()}
      >
        <ArrowRight2 size={24} color="#a7a7a7" />
      </button>
    </div>
  );
};

export default Navigation;
