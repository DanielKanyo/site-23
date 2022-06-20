import { useEffect, useState } from 'react';

import Landing from './Components/Landing/Landing';
import Navigation from './Components/Navigation/Navigation';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

const App = () => {
    const [isPageAtTop, setIsPageAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsPageAtTop(window.scrollY === 0);
        }

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <div className='app'>
            <Navigation isPageAtTop={isPageAtTop} />
            <Landing />
            <About />
            <Skills />
            <Contact />
        </div>
    );
}

export default App;
