import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from "../data/data";
import './Entrada.css';

const profile = data.profile;

const Entrada = () => {
    return (
        <Container fluid={true} style={{ margin: '0', padding: '0' }}>
            <Row>
                <Col sm={12} style={{ padding: '0.3em' }}>
                    <h1><i className='lni lni-home'></i> INFO</h1>
                    <p className="p-0 m-2">Name: Axel Laurent Obscura Sarzotti</p>
                    <p className="p-0 m-2">Role: Full Stack Developer</p>
                    <p className="p-0 m-2">Address: México</p>
                    <p className="p-0 m-2">Phone: 52 1 55 3220 6321</p>
                    <p className="p-0 m-2">Email: axosar@gmail.com</p>
                    <hr />
                    <h1>EXPERIENCE</h1>
                    <p className="p-0 m-2">Senior Full Stack Web Developer with 15 years of experience designing and developing backend architectures, decoupled and n-tier frontend web applications using HTML, CSS, JavaScript, JQuery, AJAX, JSON, XML, PHP, MySQL, NodeJS, Express, PostgressSQL, ReactJS, Angular, VueJS, NextJS.</p>
                </Col>
            </Row>

        </Container>

    )
};

export default Entrada;