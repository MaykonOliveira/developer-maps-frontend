import React from 'react';

import Sidebar from './components/Sidebar';
import Main from './components/Main';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './global.css';
import './App.css';

function App() {
  return (
    <div id="app">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
