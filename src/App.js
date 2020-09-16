import React from 'react';
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import Menu from './component/Menu';
import Intro from './component/Intro';
import ProfessionalSummary from './component/ProfessionalSummary';
import TecnicalSummary from './component/TechnicalSummary';
import Education from './component/Education';
import Languages from './component/Languages';
import Professional from './component/Professional';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col sm={2} xs={2} className="p-0 m-0" style={{ background: '#2d3e50' }}>
            <Menu />
          </Col>
          <Col sm={10} xs={10} className="p-0 pb-5 m-0">
            <Switch>
              <Route exact path="/" component={Intro} />
              <Route exact path="/professional-summary" component={ProfessionalSummary} />
              <Route exact path="/technical-summary" component={TecnicalSummary} />
              <Route exact path="/education" component={Education} />
              <Route exact path="/languages" component={Languages} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
