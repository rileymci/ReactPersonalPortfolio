import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Banner />
    <Skills />
    <Projects />
    <Education />
    <footer>Created by Riley Mcilwain 2023.</footer>
    </div>

  );
}

export default App;
