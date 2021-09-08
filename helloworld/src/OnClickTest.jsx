import { useState } from 'react';

export default function OnClickTest() {
  const [isToggled, setToggled] = useState(true);
  const [counterState, setCounter] = useState(1);
  const [inputText, setInputText] = useState('');
  const [inputHistory, setInputHistory] = useState([]);

  const toggleTrueFalse = () => {
    setToggled(!isToggled);
  };

  const incrementCounter = () => setCounter(counterState + 1);
  const decrementCounter = () => setCounter(counterState - 1);

  return (
    <>
      <button
        className="App-button"
        onClick={(e) => {
          toggleTrueFalse();
        }}
      >
        TestButton
      </button>
      <button
        onClick={(e) => {
          incrementCounter();
        }}
      >
        Increse Counter: {counterState}
      </button>
      <button
        onClick={(e) => {
          decrementCounter();
        }}
      >
        Decrease Counter: {counterState}
      </button>
      <form>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            setInputHistory([...inputHistory, e.target.value]);
          }}
        ></input>
      </form>
      <p>Input Text: {inputText}</p>
      <ul>
        {inputHistory.map((entry) => {
          return <li key={entry}>{entry}</li>;
        })}
      </ul>
    </>
  );
}
