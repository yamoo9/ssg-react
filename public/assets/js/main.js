import App from '/assets/js/App.js';
var _React = React,
  StrictMode = _React.StrictMode;
var _ReactDOM = ReactDOM,
  createRoot = _ReactDOM.createRoot;
var rootElement = document.getElementById('root');
var reactDomRoot = createRoot(rootElement);
reactDomRoot.render(
  /*#__PURE__*/ React.createElement(
    StrictMode,
    null,
    /*#__PURE__*/ React.createElement(App, null)
  )
);
