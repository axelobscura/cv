import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProfessionalSummary.css';

const Professional = () => {
    return (
        <Container className="ps ts">
            <Row>
                <Col>
                    <hr />
                    <h1><span className="material-icons">location_searching</span> Professional Summary</h1>
                    <hr />
                    <p>Full stack JavaScript developer</p>
                    <hr />
                </Col>
            </Row>
        </Container>
    )
};

export default Professional;