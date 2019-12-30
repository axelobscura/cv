import React, { useState } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import { spring,AnimatedSwitch } from 'react-router-transition';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './component/Home';
import Datos from './component/Datos';

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
                    <Switch>
                      <AnimatedSwitch
                        atEnter={{ offset: +0 }}
                        atLeave={{ offset: -0 }}
                        atActive={{ offset: 0 }}
                        mapStyles={(styles) => ({
                          transform: `translateX(${styles.offset}%)`,
                        })}
                      >
                        <Route 
                          exact 
                          path="/" 
                          render={(props) => <Home />}
                        />
                        <Route 
                          exact 
                          path="/datos" 
                          render={(props) => <Datos />}
                        />
                      </AnimatedSwitch>
                    </Switch>
              </div>
          </div>
        </div>
        
      </div>
    </HashRouter>
    
  );
}

export default App;
