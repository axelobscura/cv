import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Panel from './panel/panel';
import './ProfessionalSummary.css';

import { work } from '../data/empleos.json';

const ProfessionalSummary = () => {
    const [state, setState] = useState({
        isPaneOpen: false,
        empresa: ''
    });
    let openDroper = (nombre) => {
        setState({
            isPaneOpen: true,
            empresa: nombre
        })
    };
    let closeDroper = (nombre) => {
        setState({
            isPaneOpen: false,
            empresa: nombre
        })
    };
    return (
        <Container className="ps pro">
            <Row>
                <Col>
                    <hr />
                    <h1><span className="material-icons">location_searching</span> Professional Summary</h1>
                    <hr />
                    <Panel
                        isPaneOpen={state.isPaneOpen}
                        nombre={state.empresa}
                        closePane={() => closeDroper()}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    {work.map((empleo, i) => (
                        <div key={i}>
                            <h2 onClick={() => openDroper(empleo.empresa)}>
                                <span
                                    className="material-icons droper"
                                >
                                    keyboard_arrow_right
                                </span>
                                {empleo.empresa} | {empleo.periodo}
                            </h2>
                            <h3><b>{empleo.rol}</b></h3>
                            <h3>{empleo.client}</h3>
                            <hr />
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
    )
};

export default ProfessionalSummary;