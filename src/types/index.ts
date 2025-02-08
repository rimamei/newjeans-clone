export type TGalleryType = 'how-sweet' | 'supernatural'

export type AudioState = {
    isPlaying: boolean;
    currentSong: number;
}

export type AudioAction =
    | { type: 'PLAY'; payload: boolean }
    | { type: 'NEXT'; payload: number };

export type TransitionDirection = 'forward' | 'backward';

export interface ScreenProps {
    isActive: boolean;
    direction: TransitionDirection;
    children: React.ReactNode;
}

export interface NavigationProps {
    onNavigate: (screen: string) => void;
    onBack?: () => void;
}

