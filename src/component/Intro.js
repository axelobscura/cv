import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Intro.css';

export default () => (
    <Container className="intro" fluid>
        <Row className="m-0 p-0">
            <Col className="m-0 p-0">
                <h1>Welcome</h1>
                <hr />
                <p>Hi!, I'm a Senior Full Stack Web Developer with 14 years of experience in designing architectures, developing decoupled and front to back web applications using HTML5, CSS3, JavaScript, AJAX, Json, XML, Node, Express, PHP, MySQL, Mongo, Postgress, Angular, React, React Native, Vue, Unit Tests, Jest, Mocha...</p>
            </Col>
        </Row>
    </Container>
);