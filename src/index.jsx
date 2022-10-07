import './styles/global.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

const reactDomRoot = createRoot(container);

// without JSX
reactDomRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
