import { useState } from 'react';
import { useScreenSize } from './hooks/useScreenSize';
import Home from './components/screens/Home';
import Gallery from './components/screens/Gallery';
import Mockup from './components/layout/Mockup';
import { TGalleryType } from './types';

/* Swiper Styles */
import 'swiper/swiper-bundle.css';
import { AudioProvider } from './context/audioContext';

function App() {
  const isSmallScreen = useScreenSize();

  const [activeScreen, setActiveScreen] = useState<keyof typeof screens>(0);
  const [type, setType] = useState<TGalleryType>('supernatural');

  const handleGallery = (type: TGalleryType) => {
    setActiveScreen(1);
    setType(type);
  };

  const handleHome = () => {
    setActiveScreen(0);
  };

  const screens = {
    0: <Home onGallery={handleGallery} />,
    1: <Gallery onBack={handleHome} type={type} />,
  };

  const content = screens[activeScreen];

  return (
    <AudioProvider>
      <main className="content">
        <section className="bg-image">
          {isSmallScreen ? (
            <>{content}</>
          ) : (
            <div className="mockup">
              <Mockup>{content}</Mockup>
            </div>
          )}
        </section>
      </main>
    </AudioProvider>
  );
}

export default App;
