import { createElement as h, StrictMode } from 'react';
import { createRoot } from 'react-dom';

const container = document.getElementById('root');

const reactDomRoot = createRoot(container);

// without JSX
reactDomRoot.render(
  h(StrictMode, null, h('div', { className: 'App' }, 'React App'))
);
