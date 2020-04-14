import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContextSample from './ContextSample';
import Counter from './Counter';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Counter />
    <ContextSample />
  </React.StrictMode>,
  document.getElementById('root')
);

