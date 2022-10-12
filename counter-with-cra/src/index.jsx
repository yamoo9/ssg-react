import 'react-app-polyfill/stable';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'styles/global.css';
import App from 'app/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);

if (process.env.NODE_ENV.startsWith('prod')) {
  import('./reportWebVitals').then(({ default: reportWebVitals }) =>
    reportWebVitals(console.log)
  );
}
