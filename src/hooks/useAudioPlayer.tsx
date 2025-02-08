import { useEffect, useRef } from 'react';
import { useAudio } from './useContext';
import { songs } from '@/constants/data';

export const useAudioPlayer = () => {
  const { state, dispatch } = useAudio();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (state.isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [state]);

  const handlePlaySong = () => {
    dispatch({ type: 'PLAY', payload: true });
  };

  const handleNextSong = () => {
    dispatch({ type: 'NEXT', payload: state.currentSong + 1 });
  };

  const togglePlayPause = () => {
    dispatch({ type: 'PLAY', payload: !state.isPlaying });
  };

  return {
    audioRef,
    handlePlaySong,
    handleNextSong,
    togglePlayPause,
    currentSong: songs[state.currentSong],
    isPlaying: state.isPlaying,
  };
};
