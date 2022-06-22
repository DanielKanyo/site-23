import { useState, useEffect } from 'react';

import Landing from './Components/Landing/Landing';
import Navigation from './Components/Navigation/Navigation';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import { SCREEN_SIZE_PARALLAX_LIMIT } from './Static/Constants/constants';

const App = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= SCREEN_SIZE_PARALLAX_LIMIT;

    return (
        <div className='app'>
            <Navigation />
            <Landing />
            <About isMobile={isMobile} />
            <Skills isMobile={isMobile} />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
