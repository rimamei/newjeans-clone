import { audioReducers, initialAudioState } from '@/reducers/audioReducers';
import { AudioAction, AudioState } from '@/types';
import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react';

interface AudioContextType {
  state: AudioState;
  dispatch: Dispatch<AudioAction>;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

const AudioProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(audioReducers, initialAudioState);

  return (
    <AudioContext.Provider value={{ state, dispatch }}>
      {children}
    </AudioContext.Provider>
  );
};

export { AudioContext, AudioProvider };
