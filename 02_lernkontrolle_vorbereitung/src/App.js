import './App.css';
import {useState} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Output from "./Output";

function App() {
  const [textState, setTextState] = useState('');
  const [radioState, setRadioState] = useState('');
  const [checkboxCheckedState, setCheckboxCheckedState] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const submitHandler = (e) => {
    setShowOutput(!showOutput);
    e.preventDefault();
  }

  return (
    <div className="App">
      <div className={'form'}>
        <form onSubmit={submitHandler}>
          <div className={'form-group'}>
            <label>Text Input
              <input className={'form-control'} required={true} type={'text'} value={textState} onChange={(event) => {
                setTextState(event.target.value)
              }}/>
            </label>
          </div>
          <div className={'form-check'}>
            <label className={'form-check-label'}>
              <input className={'form-check-input'} type={'radio'} value={'radio1'} checked={radioState === 'radio1'}
                     onChange={(event) => {
                       setRadioState(event.target.value)
                     }}/>
              Radio 1
            </label>
          </div>
          <div className={'form-check'}>
            <label className={'form-check-label'}>
              <input className={'form-check-input'} type={'radio'} value={'radio2'} checked={radioState === 'radio2'}
                     onChange={(event) => {
                       setRadioState(event.target.value)
                     }}/>
              Radio 2
            </label>
          </div>
          <div className={'form-check'}>
            <label className={'form-check-label'}>Checkbox
              <input className={'form-check-input'} type={'checkbox'} checked={checkboxCheckedState}
                     onChange={(event) => {
                       setCheckboxCheckedState(!checkboxCheckedState)
                     }}/>
            </label>
          </div>
          <button className={'btn btn-primary'} type={'submit'}>Submit</button>
        </form>
      </div>
      {showOutput ? <Output textState={textState} radioState={radioState} checkboxCheckedState={checkboxCheckedState} /> : ''}
    </div>
  );
}

export default App;
