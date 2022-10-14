import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from 'pages/Layout';
import Home from 'pages/Home';
import Products from 'pages/Products';
import CounterPage from 'pages/CounterPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 10,
      min: 0,
      max: 100,
      step: 2,
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(e) {
    let stepValue = 1;

    if (e.target.textContent.includes('-')) {
      stepValue = -1;
    }

    this.setState({
      count: this.state.count + this.state.step * stepValue,
    });
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/counter"
              element={
                <CounterPage
                  count={this.state.count}
                  onUpdate={this.updateState}
                />
              }
            />
          </Routes>
        </Layout>
      </div>
    );
  }
}

export default App;
