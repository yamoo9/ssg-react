import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import { StrictMode } from 'react';
import { render } from 'react-dom';
import 'styles/global.css';
import App from 'app/App';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

// dynamic import
// Promise {} .then, .catch, .finally
if (process.env.NODE_ENV.startsWith('prod')) {
  import('./reportWebVitals').then(({ default: reportWebVitals }) =>
    reportWebVitals(console.log)
  );
}
