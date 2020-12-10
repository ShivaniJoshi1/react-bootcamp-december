import logo from './logo.svg';
import './App.css';
import LifecycleClassComp from './LifecycleClassComp';
import LifecycleFuncComp from './LifecycleFuncComp';
import { useState, useEffect } from 'react'
import FormClassComp from './FormClassComp';

import axios from 'axios'

import Todo from './Todo';

function App() {
  const [flag, setFlag] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
      setData(response.data);
    }).catch(error => {
      console.log(error);
      setData([]);
    });

    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then(response => response.json())
    //   .then(json => {
    //     // console.log(json);
    //     setData(json);
    //   }).catch(error => {
    //     console.log(error);
    //     setData([]);
    //   })
  }, []);


  // const comp = flag ? <LifecycleClassComp /> : null
  const comp = flag ? <LifecycleFuncComp /> : null

  return (
    <div className="container">
      <Todo data={data} />
      {/* { comp} */}
      {/* <button onClick={e => setFlag(!flag)}>Toggle</button> */}

      {/* <FormClassComp /> */}
    </div>
  );
}

export default App;
