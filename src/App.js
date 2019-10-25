import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import { spring,AnimatedSwitch } from 'react-router-transition';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './component/Menu';
import Home from './component/Home';
import Datos from './component/Datos';

function App() {
  function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  }
  // wrap the `spring` helper to use a bouncy config
  function bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 22,
    });
  }
  // child matches will...
  const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
      opacity: 0,
      scale: 1.2,
    },
    // leave in a transparent, downscaled state
    atLeave: {
      opacity: bounce(0),
      scale: bounce(0.8),
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
      opacity: bounce(1),
      scale: bounce(1),
    },
  };
  return (
    <HashRouter basename='/'>
      <div className="App">
        <div className='wrapperHome'>
          <div className='row'>
              <div className='column'>
                  <div className='blue-column'>
                    <Menu />
                  </div>
              </div>
              <div className='column contenido'>
                  <div className='green-column'>
                    <Switch>
                      <AnimatedSwitch
                        atEnter={bounceTransition.atEnter}
                        atLeave={bounceTransition.atLeave}
                        atActive={bounceTransition.atActive}
                        mapStyles={mapStyles}
                        className="switch-wrapper"
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
        
      </div>
    </HashRouter>
    
  );
}

export default App;
