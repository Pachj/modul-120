import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [size, setSize] = useState(0);
  const [bmi, setBmi] = useState('Bitte geben Sie Ihr Gewicht und Ihre Grösse ein.');
  const [backgroundColor, setBackgroundColor] = useState('transparent');

  const calculateBMI = () => {
    // round to 2 decimals
    setBmi(Math.round((weight / size / size) * 10000 * 100) / 100);
  };

  React.useEffect(() => {
    if (bmi <= 18.5) {
      setBackgroundColor('red');
    } else if (bmi > 18.5 && bmi <= 24.9) {
      setBackgroundColor('green');
    } else if (bmi > 24.9) {
      setBackgroundColor('red');
    } else {
      setBackgroundColor('transparent');
    }
  }, [bmi]);

  return (
    <div className="App">
      <div className="box-container">
        <h1>BMI Calculator</h1>
        <div className="inner-container">
          <label>
            Ihr Gewicht (kg):
            <input value={weight} onChange={(e) => setWeight(e.target.value)} type={'number'} /> kg
          </label>
        </div>
        <div className="inner-container">
          <label>
            Ihre Körpergrösse(cm):
            <input value={size} onChange={(e) => setSize(e.target.value)} type={'number'} /> cm
          </label>
        </div>
        <button onClick={calculateBMI}>Berechnen</button>
        <div id="output-container" className="inner-container">
          <p id="output" style={{ backgroundColor: backgroundColor }}>
            {bmi}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
