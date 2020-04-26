import React, { useState } from 'react';
import { HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './component/Home';
function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <div className='wrapperHome'>
          <div className='row'>
            <div className='column contenido'>
              <Home />
            </div>
          </div>
        </div>

      </div>
    </HashRouter>

  );
}

export default App;
