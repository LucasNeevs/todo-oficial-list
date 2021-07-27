import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

const rootElement: HTMLElement | null = document.querySelector('#root');

ReactDOM.render(
  <App />,
  rootElement,
);