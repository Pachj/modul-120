import './App.css';
import React, { useState } from 'react';
import Welcome from './Welcome';
import OnClickTest from './OnClickTest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="Henry" />
        <OnClickTest />
      </header>
    </div>
  );
}

export default App;
