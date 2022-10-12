import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'pages/Layout';
import Home from 'pages/Home';
import Products from 'pages/Products';
import CounterPage from 'pages/Counter';

// stateful component
// class component

class App extends React.Component {
  constructor(props) {
    super(props);

    // 컴포넌트 상태(state) 관리
    this.state = {
      count: 10,
      min: 0,
      max: 100,
      step: 2,
    };
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/counter"
              element={<CounterPage count={this.state.count} />}
            />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Layout>
      </div>
    );
  }
}

export default App;
