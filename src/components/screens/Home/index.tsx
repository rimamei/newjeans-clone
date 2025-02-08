import {
  ALBUM_COVER,
  BTN_NEXT,
  BTN_PAUSE,
  BTN_PLAY,
  CARD_1,
  CARD_2,
  ICN_LOLLIPOP,
  ICN_MUSIC,
} from '@/constants/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Scrollbar } from 'swiper/modules';
import { gallery, snsList } from '@/constants/data';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { TGalleryType } from '@/types';
import clsx from 'clsx';
import style from './style.module.css';

interface HomeProps {
  onGallery: (arg: TGalleryType) => void;
}

const Home = ({ onGallery }: HomeProps) => {
  const { currentSong, isPlaying, togglePlayPause, handleNextSong } =
    useAudioPlayer();

  const articles = [
    {
      img: CARD_1,
      category: 'New Album',
      title: (
        <h3 className={style['card-title']}>
          &apos;‘Supernatural’ 발매!&apos;
        </h3>
      ),
      description: (
        <div className={style['card-description']}>
          <div className={style['card-content']}>
            <p>My feeling’s getting deeper</p>
            <img
              className={style['article-icon']}
              src={ICN_MUSIC}
              alt="music"
            />
          </div>
          <p>‘Supernatural’ Music Video 보러 가기!</p>
        </div>
      ),
      link: 'https://www.youtube.com/watch?v=ZncbtRo7RXs&feature=youtu.be',
    },
    {
      img: CARD_2,
      category: 'New Video',
      title: (
        <div className={style['card-content']}>
          <h3 className={style['card-title']}>How Sweet, NewJeans!</h3>
          <img
            className={style['article-icon']}
            src={ICN_LOLLIPOP}
            alt="lollipop"
          />
        </div>
      ),
      description: (
        <p className={style['card-description']}>
          신곡과 함께 뉴진스 멤버들의 새로운 영상을 <br /> 확인하세요.
        </p>
      ),

      link: 'https://www.youtube.com/watch?v=ZncbtRo7RXs&feature=youtu.be',
    },
  ];

  const handleRedirect = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className={clsx(style['home-container'], 'slide-up')}>
      <div className={style['player']}>
        <figure className={style['player-info']}>
          <img src={ALBUM_COVER} alt="cover" className={style['album-cover']} />
          <figcaption className={style['player-song-info']}>
            <p>{currentSong.title}</p>
            <p>NewJeans</p>
          </figcaption>
        </figure>
        <div className={style['btn-audio-group']}>
          <button
            type="button"
            className={style['btn-audio']}
            onClick={togglePlayPause}
            aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
          >
            <img
              className={style['btn-audio']}
              src={isPlaying ? BTN_PAUSE : BTN_PLAY}
              alt="play"
            />
          </button>
          <button
            type="button"
            className={style['btn-audio']}
            onClick={handleNextSong}
            aria-label="Next song"
          >
            <img className={style['btn-audio']} src={BTN_NEXT} alt="pause" />
          </button>
        </div>
      </div>

      <div>
        <Swiper
          modules={[Scrollbar, A11y]}
          spaceBetween={8}
          slidesPerView={1.1}
          threshold={2}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 0.1,
            releaseOnEdges: true,
          }}
        >
          {articles.map((item, index) => (
            <SwiperSlide
              onClick={() => handleRedirect(item.link)}
              className={style['card']}
              key={index}
            >
              <img className={style['card-img']} src={item.img} alt="card" />
              <div className={style['card-info']}>
                <span className={style['card-category']}>{item.category}</span>
                {item.title}
                {item.description}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={style['media-container']}>
        {gallery.map((item, index) =>
          item.link ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={item.link}
              key={index}
            >
              <img
                className={style['app-icon']}
                src={item.img}
                alt={`icon-${index}`}
              />
            </a>
          ) : (
            <button
              key={index}
              onClick={() => onGallery(item.name as TGalleryType)}
              className={style['app-icon-container']}
            >
              <img
                className={style['app-icon']}
                src={item.img}
                alt={`icon-${index}`}
              />
            </button>
          )
        )}
      </div>

      <div className={style['sns-container']}>
        {snsList.map((item, index) => (
          <a
            href={item.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={style['sns-icon']}
              src={item.icon}
              alt={`icon-${index}`}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
