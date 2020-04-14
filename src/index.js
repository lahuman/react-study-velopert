import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContextSample from './ContextSample';
import Counter from './Counter';
import User from './User';
import ErrorBoundary from './ErrorBoundary';
import * as Sentry from '@sentry/browser';

Sentry.init({dsn: "https://26781886aee34eaca58c5fdc8aacc395@o377526.ingest.sentry.io/5199757"});


ReactDOM.render(
  <React.StrictMode>
  {
    // <App />
    // <Counter />
    // <ContextSample />
  }
  <ErrorBoundary>
    <User />
  </ErrorBoundary>

  </React.StrictMode>,
  document.getElementById('root')
);

