
import './App.css';
import { Experience } from './components/Experience';
import { ContInfo } from './components/ContInfo';
import { My_Photo } from './components/Photo';
import MyImg from './images/photo.jpg';



function App() {
  return (
    <div className="App">

      <My_Photo img={MyImg} />
      <ContInfo />
      <Experience />
    </div>
  );
}

export default App;
