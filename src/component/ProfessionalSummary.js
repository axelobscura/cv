import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProfessionalSummary.css';

import {work} from '../data/empleos.json';

export default () => (
    <Container className="ps pro">
        <Row>
            <Col>
                <hr />
                <h1><span className="material-icons">location_searching</span> Professional Summary</h1>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                {work.map(empleo => (
                    <>
                        <h2>{empleo.empresa}</h2>
                        <h3><b>{empleo.rol}</b></h3>
                        <h3>{empleo.client}</h3>
                        <hr/>
                    </>
                ))}
            </Col>
        </Row>
    </Container>
);