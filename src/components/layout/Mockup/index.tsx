import { PropsWithChildren } from 'react';
import { formatTime } from '@/utils/formatTime';
import { STATUS_BAR } from '@/constants/images';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';

import style from './style.module.css';

const Mockup = ({ children }: PropsWithChildren) => {
  const { audioRef, handleNextSong, currentSong } = useAudioPlayer();

  return (
    <div className={style.phone}>
      <div className={style.buttons}>
        <div className={style.left}>
          <div className={style.button}></div>
          <div className={style.button}></div>
          <div className={style.button}></div>
        </div>
        <div className={style.right}>
          <div className={style.button}></div>
        </div>
      </div>
      <div className={style.screen}>
        <div className={style.screenContainer}>
          <div className={style['status-bar']}>
            <p>{formatTime(new Date())}</p>
            <img src={STATUS_BAR} alt="status-bar" />
          </div>
          <audio
            ref={audioRef}
            src={currentSong.audio}
            onEnded={handleNextSong}
            className={style.hidden}
          >
            <track kind="captions" />
          </audio>
          {children}
          <div className={style['mockup-footer']}>
            <div className={style['search-container']}>
              <p>NewJeans.kr</p>
            </div>
            <p className={style.copyright}>©2024 ADOR. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mockup;
