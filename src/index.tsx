import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './routing';
import './style.scss';

function App() {
  return <Routing />;
}

ReactDOM.render(<App />, document.getElementById('app'));
