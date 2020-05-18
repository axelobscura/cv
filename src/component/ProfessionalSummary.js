import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProfessionalSummary.css';

export default () => (
    <Container className="ps">
        <Row>
            <Col>
                <h1>Professional Summary</h1>
                <hr />
            </Col>
        </Row>
    </Container>
);