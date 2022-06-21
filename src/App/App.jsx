import Landing from './Components/Landing/Landing';
import Navigation from './Components/Navigation/Navigation';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
    return (
        <div className='app'>
            <Navigation />
            <Landing />
            <About />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
