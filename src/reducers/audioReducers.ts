import { songs } from "@/constants/data";
import { AudioAction, AudioState } from "@/types";

export const initialAudioState: AudioState = {
    isPlaying: false,
    currentSong: 0
}

export const audioReducers = (state = initialAudioState, action: AudioAction) => {
    switch (action.type) {
        case 'PLAY':
            return {
                ...state,
                isPlaying: action.payload
            }
        case 'NEXT':
            return {
                ...state,
                currentSong: state.currentSong === songs.length - 1 ? 0 : action.payload
            }
        default:
            return state
    }
}