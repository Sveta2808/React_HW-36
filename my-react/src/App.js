
import './App.css';
import { useState, useEffect } from 'react';
import { Experience } from './components/Experience';
import { ContInfo } from './components/ContInfo';
import { MyPhoto } from './components/Photo';
import MyImg from './images/photo.jpg';
import { Counter } from './components/Counter';
import { Form } from './components/Form';
import {useRepos} from './hooks/useRepos';

const initialExperience = [
  {
    id: 1,
    title: 'Accountant',
    company: 'Khmelnytskyi regional branch of the All-Ukrainian Network of People Living with HIV',
    description: 'Realization of tender purchases. Maintaining current contractual documentation',
    link: 'https://www.youtube.com'
  },
  {
    id: 2,
    title: 'Accountant',
    company: 'Khmelnytskyi regional branch of the All-Ukrainian Network of People Living with HIV',
    description: 'Realization of tender purchases. Maintaining current contractual documentation',
    link: 'https://www.youtube.com'
  }
]

function App() {
  const [items, setItems] = useState(initialExperience);

  function handleAdd(title, company, description, link) {
    const newItem = { id: items.length + 1, title, company, description, link };
    setItems([...initialExperience, newItem]);
  }



  return (
    <div className="App">

      <MyPhoto img={MyImg} />
      <ContInfo />
      <Form onAdd={handleAdd} />

      <Experience items={items} />

      <Counter />
    </div>
  );
}

export default App;
