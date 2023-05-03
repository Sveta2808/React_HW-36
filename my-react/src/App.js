
import './App.css';
import { Experience } from './components/Experience';
import { ContInfo } from './components/ContInfo';
import { My_Photo } from './components/Photo';
import MyImg from './images/photo.jpg';
import { Counter } from './components/Counter';
import {Form} from './components/Form';

const initialExperience = [
  {
    id: 1,
    title: 'Accountant',
    name: 'Khmelnytskyi regional branch of the All-Ukrainian Network of People Living with HIV',
    description:'Realization of tender purchases. Maintaining current contractual documentation',
    link: 'https://www.youtube.com'
  }
]

function App() {
  return (
    <div className="App">

      <My_Photo img={MyImg} />
      <ContInfo />
      <Experience items={initialExperience} />
      <Form />
      <Counter />
    </div>
  );
}

export default App;
