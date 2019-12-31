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
        <div style={{width:'100%'}}>
            <div className="technical">
            
                <hr/>
                <h1>TECHNICAL SUMMARY</h1>
                <hr/>
                <Container fluid={true}>
                    <Row>
                    <Col>
                    
                        <ul className="p-0">
                        
                            <li>
                                <h3 className="p-0 m-2"><b><i className="lni-angle-double-right"></i> FRONT END</b></h3>
                                <ul className="p-0">
                                    {tech.map(t => (
                                        <li><p className="p-0 m-0">{t}</p></li>
                                    ))}
                                </ul>
                            </li>
                        
                        </ul>
                        <ul className="p-0">
                            <li>
                                <h3 className="p-0 m-2"><b><i className="lni-angle-double-right"></i> LANGUAGES</b></h3>
                                <ul className="p-0">
                                    {languages.map(t => (
                                        <li><p className="p-0 m-0">{t}</p></li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                        {profile.map(p => (
                            <p>{p.summary}</p>
                        ))}
                    </Col>
                    <Col>
                        <ul className="p-0">
                            <li>
                                <h3 className="p-0 m-2"><b><i className="lni-angle-double-right"></i> BACKEND</b></h3>
                                <ul className="p-0">
                                    {backend.map(t => (
                                        <li><p className="p-0 m-0">{t}</p></li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                        <ul className="p-0">
                            <li>
                                <h3 className="p-0 m-2"><b><i className="lni-angle-double-right"></i> FRAMEWORKS</b></h3>
                                <ul className="p-0">
                                    {frames.map(t => (
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