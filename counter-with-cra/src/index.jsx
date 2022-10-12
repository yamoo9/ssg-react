import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'styles/global.css';
import App from 'app/App';

// v18 API
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);

// dynamic import
// Promise {} .then, .catch, .finally
if (process.env.NODE_ENV.startsWith('prod')) {
  import('./reportWebVitals').then(({ default: reportWebVitals }) =>
    reportWebVitals(console.log)
  );
}
