import './App.css'
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Contact from './components/Contact';


export function App() {
  return (
      <div>
        <Header />
        <About />
        <Projects />
        <Experiences />
        {/* <Contact /> */}
      </div>
  )
}
