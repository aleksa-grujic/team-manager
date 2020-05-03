import React, {useEffect, useState}  from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    console.log('trestaf');
    fetch("http://localhost:5000/")
    .then(res => res.json())
    .then(res => {
      console.log('test' + res);
      setData(res);
    });
  });


  console.log(data);   
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> P{JSON.stringify(data)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
