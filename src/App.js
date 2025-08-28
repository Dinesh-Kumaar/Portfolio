import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <>
    <div className='bg-container'>
        <Navbar />
        <Home />
        <About />
    </div>
    <Skills />
    <Project />
    <Contact />
    </>
  );
}

export default App;
