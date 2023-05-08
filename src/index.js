import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <>
    {window.orientation === undefined ? null : (
      <div className="landscape-warning">
    
        <p>Please switch to landscape (or) desktop mode for the best experience.</p>
    
      <h1>Welcome to my app!</h1>
      <p>This is some content that should be hidden in portrait mode.</p>
      </div>
    )}
    <App />
  </>,
  document.querySelector('#root')
);
