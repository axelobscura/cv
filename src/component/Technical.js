import React from 'react';
import data from "../data/data";
import './Entrada.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const profile = data.profile;
const tech = data.webtech;
const frames = data.frames;
const backend = data.backend;
const languages = data.languages;

const Technical = () => {
    return (
        <Container fluid={true} style={{ margin: '0', padding: '0' }}>
            <Row>
                <Col sm={12} style={{ padding: '0.3em' }}>
                    <h1><i className='lni lni-home'></i> TECHNICAL INFO</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <ul className="p-0">
                        <li>
                            <h3 className="p-0 m-2"><b><i className="lni-angle-double-right"></i> FRONT END</b></h3>
                            <ul className="p-0">
                                {tech.map((t, index) => (
                                    <li key={index}><p className="p-0 m-0">{t}</p></li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                    <ul className="p-0">
                        <li>
                            <h3 className="p-0 m-2"><b><i className="lni-angle-double-right"></i> LANGUAGES</b></h3>
                            <ul className="p-0">
                                {languages.map((t, index) => (
                                    <li key={index}><p className="p-0 m-0">{t}</p></li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                    {profile.map((p, index) => (
                        <p key={index}>{p.summary}</p>
                    ))}
                </Col>
                <Col>
                    <ul className="p-0">
                        <li>
                            <h3 className="p-0 m-2"><b><i className="lni-angle-double-right"></i> BACKEND</b></h3>
                            <ul className="p-0">
                                {backend.map((t, index) => (
                                    <li key={index}><p className="p-0 m-0">{t}</p></li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                    <ul className="p-0">
                        <li>
                            <h3 className="p-0 m-2"><b><i className="lni-angle-double-right"></i> FRAMEWORKS</b></h3>
                            <ul className="p-0">
                                {frames.map((t, index) => (
                                    <li key={index}><p className="p-0 m-0">{t}</p></li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </Col>

            </Row>
        </Container>
    )
};

export default Technical;