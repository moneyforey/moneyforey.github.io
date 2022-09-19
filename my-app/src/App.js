import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './routes/about/About';
import Contact from './routes/contacts/contacts';
import HomePage from './routes/home/HomePage';
import Projects from './routes/projects/Projects';
import Skills from './routes/skills/Skills';


function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <HomePage/>
      <About/>
      <Skills/>
      <Projects/>
      <Navbar /> 
      <Contact/>
      <Footer/>
      </header>
    </div>
  );
}

export default App;
