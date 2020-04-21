import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from "../data/data";
import './Entrada.css';

const profile = data.profile;

const Entrada = () => {
    return (
        <Container fluid={true} style={{ margin: '0', padding: '0.2em' }}>
            <Row>
                <Col sm={12} style={{ padding: '0.3em', borderLeft: '2px solid red' }}>
                    <h1><i className='lni lni-user'></i> PERSONAL INFO</h1>
                    <h4 className="p-0 m-2" style={{ textAlign: 'left', color: '#333' }}>Axel Laurent Obscura Sarzotti</h4>
                    <h4 className="p-0 m-2" style={{ textAlign: 'left', color: '#333' }}>Full Stack Developer</h4>
                    <h4 className="p-0 m-2" style={{ textAlign: 'left', color: '#333' }}>México</h4>
                    <h4 className="p-0 m-2" style={{ textAlign: 'left', color: '#333' }}>5255 3220 6321</h4>
                    <h4 className="p-0 m-2" style={{ textAlign: 'left', color: '#333' }}>axosar@gmail.com</h4>
                </Col>
                <Col sm={12} style={{ padding: '0.3em' }}>
                    <h1>EXPERIENCE</h1>
                    <p className="p-0 m-2">Senior Full Stack Web Developer with 16 years of experience designing and developing backend architectures, decoupled and n-tier frontend web applications using HTML, CSS, JavaScript, JQuery, AJAX, JSON, XML, PHP, MySQL, NodeJS, Express, PostgressSQL, ReactJS, Angular, VueJS, NextJS.</p>
                </Col>
            </Row>

        </Container>

    )
};

export default Entrada;