import React from 'react';
import './App.css';
import SelectBox from './components/SelectBox';

function App() {
  const options = [
    {
      "value": 1,
      "text": "menu 01",
      "disabled": false
    },
    {
      "value": 2,
      "text": "menu 02",
      "disabled": false
    },
    {
      "value": 3,
      "text": "menu 03",
      "disabled": true
    }
  ];
  
  return (
    <div className="App">
      <h1> Select Box </h1>
      <p className="contents">
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <div className="contents">
        <h2>Small</h2>
        <SelectBox
          options={options}
          placeholderText={'선택하세요.'}
          boxSize={"sm"}
        />
      </div>
      <div className="contents">
        <h2>Medium</h2>
        <SelectBox
          options={options}
          placeholderText={'선택하세요.'}
        />
      </div>
      <div className="contents">
        <h2>Large</h2>
        <SelectBox
          options={options}
          placeholderText={'선택하세요.'}
          boxSize={"lg"}
        />
      </div>
      <div className="contents">
        <h2>Default</h2>
        <SelectBox
          options={options}
        />
      </div>
      <div className="contents">
        <h2>Disabled</h2>
        <SelectBox
          options={options}
          disabled={true}
        />
      </div>
    </div>
  );
}

export default App;
