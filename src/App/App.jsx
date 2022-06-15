import Landing from './Components/Landing/Landing';
import Navigation from './Components/Navigation/Navigation';
import About from './Components/About/About';

const App = () => {
    return (
        <div className='app'>
            <Navigation />
            <Landing />
            <About />
        </div>
    );
}

export default App;
