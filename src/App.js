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


function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col sm={2} xs={2} className="p-0 m-0">
            <Menu />
          </Col>
          <Col sm={10} xs={10} className="p-0 m-0">
            <Switch>
              <Route exact path="/" component={Intro} />
              <Route exact path="/professional-summary" component={ProfessionalSummary} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
