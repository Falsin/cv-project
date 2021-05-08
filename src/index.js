import React from 'react';

import ReactDOM from 'react-dom';
import App from './App';
import style from './style.css'
import TemplateCV from './components/templateCV'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <TemplateCV />
  </React.StrictMode>,
  document.getElementById('root')
);