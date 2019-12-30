import React, { useState } from 'react';
import { HashRouter } from "react-router-dom";
import { spring,AnimatedSwitch } from 'react-router-transition';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './component/Home';


function App() {
  const [count, setCount] = useState(0);
  function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  }
  function bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 100,
    });
  }
  const bounceTransition = {
    atEnter: {
      opacity: 0,
      scale: 0.1,
    },
    atLeave: {
      opacity: 0,
      scale: 0.9,
    },
    atActive: {
      opacity: 1,
      scale: 1,
    },
  };
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
