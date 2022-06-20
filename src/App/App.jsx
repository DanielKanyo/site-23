import Landing from './Components/Landing/Landing';
import Navigation from './Components/Navigation/Navigation';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

const App = () => {
    return (
        <div className='app'>
            <Navigation />
            <Landing />
            <About />
            <Skills />
            <Contact />
        </div>
    );
}

export default App;
