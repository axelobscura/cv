import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Panel from './panel/panel';
import './ProfessionalSummary.css';

import {work} from '../data/empleos.json';

let openDroper = (e) => {
    console.log(e);
}

export default () => (
    <Container className="ps pro">
        <Row>
            <Col>
                <hr />
                <h1><span className="material-icons">location_searching</span> Professional Summary</h1>
                <hr />
                <Panel />
            </Col>
        </Row>
        <Row>
            <Col>
                {work.map((empleo, i) => (
                    <div key={i}>
                        <h2>
                            <span className="material-icons droper" onClick={() => openDroper(empleo.empresa)}>keyboard_arrow_right</span> 
                            {empleo.empresa} | {empleo.periodo}
                        </h2>
                        <h3><b>{empleo.rol}</b></h3>
                        <h3>{empleo.client}</h3>
                        <hr/>
                    </div>
                ))}
            </Col>
        </Row>
    </Container>
);