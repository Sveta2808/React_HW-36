
import './App.css';
import { Experience } from './components/Experience';
import { ContInfo } from './components/ContInfo';
import { Photo } from './components/Photo';

function App() {
  return (
    <div className="App">

      <Photo />
      <ContInfo />
      <Experience />
    </div>
  );
}

export default App;
