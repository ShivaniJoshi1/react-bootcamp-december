import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HeaderTitle from './HeaderTitle';
import Calculate from './Calculate';
import Calc from './Calc';
import { useState } from 'react';
import CalcProps from './CalcProps';
import CalcClassProps from './CalcClassProps';

function App() {
  // const title = "Harman React JS Bootcamp";
  // const subTItle = "React Header"

  const [state, setState] = useState({
    num1: null,
    num2: null,
    result: null
  });

  const [state1, setState1] = useState({
    num1: null,
    num2: null,
    result: null
  });

  const calcfunc = () => {
    const result = state.num1 + state.num2;
    setState({ ...state, result });
  }

  const setValues = (val) => {
    setState({ ...state, ...val });
  }

  const calcfunc1 = () => {
    const result = state1.num1 + state1.num2;
    setState1({ ...state1, result });
  }

  const setValues1 = (val) => {
    setState1({ ...state1, ...val });
  }

  return (
    <div className="App">
      <CalcClassProps num1={state.num1} num2={state.num2} result={state.result} calc={calcfunc} setValues={setValues} />

      <CalcClassProps num1={state1.num1} num2={state1.num2} result={state1.result} calc={calcfunc1} setValues={setValues1} />

      {/* <CalcProps num1={state.num1} num2={state.num2} result={state.result} calc={calcfunc} setValues={setValues} /> */}
      {/* <Calc /> */}
      {/* <Calculate /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header title={title} />
        <HeaderTitle title={subTItle
        } />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
