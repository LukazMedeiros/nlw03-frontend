import React from 'react';
import ReactDOM from 'react-dom';
import Rotas from './routes'
import './styles/reset.css';
import './styles/base.css';

ReactDOM.render(
  <React.StrictMode>
    <Rotas/>
  </React.StrictMode>,
  document.getElementById('root')
);