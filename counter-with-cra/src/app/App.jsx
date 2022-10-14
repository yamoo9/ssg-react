import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from 'pages/Layout';
import Home from 'pages/Home';
import Products from 'pages/Products';
import CounterPage from 'pages/CounterPage';

// memoization

function App(props) {
  // 함수 컴포넌트의 상태는 어떻게 관리?
  const [count, setCount] = React.useState(10);
  const [step] = React.useState(2);
  // const [min] = React.useState(0);
  // const [max] = React.useState(100);

  // 함수 컴포넌트의 함수는 어떻게 관리?
  const updateState = React.useCallback(
    (e) => {
      let stepValue = 1;

      if (e.target.textContent.includes('-')) {
        stepValue = -1;
      }

      // setCount(newValue)
      // setCount((oldValue) => { return oldValue + step })

      // setCount(count + step * stepValue);

      setCount((oldCount) => oldCount + step * stepValue);
    },
    // [count, step]
    [step]
  );

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/counter"
            element={<CounterPage count={count} onUpdate={updateState} />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
