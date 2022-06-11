
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Form from './components/Contacts/Form';
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import OverView from './components/OverView/OverView';
import Project from './components/Project/Project';

function App() {
  return (
    <div className="App">
      <AboutMe />
      <OverView />
      <Skills />
      <Project />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
