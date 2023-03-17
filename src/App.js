import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './Counter';

const App = () => {
  console.log('Början på App');
  //const tal = 0;
  const [number, setNumber] = useState(99);

  return (
    <>
      <h1>Counter</h1>
      <Counter number={number} setNumber={setNumber}>
        <ul>
          <li>Hej</li>
          <li>Hå</li>
        </ul>
      </Counter>
    </>
  )
}

export default App;
