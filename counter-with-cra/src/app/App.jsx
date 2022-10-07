import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from 'pages/Layout';
import Home from 'pages/Home';
import Products from 'pages/Products';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
