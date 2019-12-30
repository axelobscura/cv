import React from 'react';
import data from "../data/data";
import './Entrada.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const profile = data.profile;
const tech = data.webtech;

const Technical = () => {
    return (
        <div style={{width:'100%'}}>
            <div className="technical">
                <hr/>
                <h1>TECHNICAL SUMMARY</h1>
                <hr/>
                <Container>
                    <Row>
                    <Col>
                        <ul>
                            <li>
                                <p className="p-0 m-2">Web Technologies</p>
                                <ul>
                                    {tech.map(t => (
                                        <li><p className="p-0 m-0">{t}</p></li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>
                                <p className="p-0 m-2">Web Technologies</p>
                                <ul>
                                    {tech.map(t => (
                                        <li><p className="p-0 m-0">{t}</p></li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </Col>
                    </Row>
                </Container>
                <hr/>
            </div>
        </div>
    )
};

export default Technical;