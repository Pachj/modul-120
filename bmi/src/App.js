import './App.css';
import {useState} from 'react';


function App() {
  const [weight, setWeight] = useState(0);
  const [size, setSize] = useState(0);
  const [bmi, setBmi] = useState(0);

  const calculateBMI = () => {
    setBmi(weight / Math.sqrt(size));
  }

  return (
    <div className="App">
      <div>
        <label>
          Ihr Gewicht (kg):
          <input value={weight} onChange={e => setWeight(e.target.value)} type={'number'}/>{' '}
          kg
        </label>
        <label>
          Ihre Körpergrösse(cm):
          <input value={size} onChange={e => setSize(e.target.value)} type={'number'}/>{' '}
          cm 
        </label>
        <button onClick={calculateBMI}>Berechnen</button>
      </div>
      <p>{bmi}</p>
    </div>
  );
}

export default App;
