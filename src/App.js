import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './component/Menu';
import Home from './component/Home';
import Datos from './component/Datos';

function App() {
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
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}
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
