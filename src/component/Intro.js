import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import './Intro.css';

export default () => (
    <Container className="intro" fluid>
        <Row className="m-0 p-0">
            <Col className="m-0 p-0">
                <h1>Welcome!</h1>
                <h2>I'm Axel Laurent</h2>
                <hr />
                <p>Senior Full stack JavaScript developer with hands on<br />experience of designing, developing and maintaining web apps as well as mobile applications.<br />Possesses diverse experience of creating multiple highly scalable applications <b>using different tech stacks</b></p>
                <Link to="/professional-summary"><button className="btn">Professional Summary</button></Link>
            </Col>
        </Row>
    </Container>
);