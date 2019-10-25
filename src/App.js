import React from 'react';
import { HashRouter, Route, Switch, withRouter, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
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
                      Some Text in Column One
                  </div>
              </div>
              <div className='column contenido'>
                  <div className='green-column'>
                    <Switch>
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
