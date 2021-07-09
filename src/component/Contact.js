import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProfessionalSummary.css';

const Contact = () => {
    return (
        <Container className="ps ts">
            <Row>
                <Col>
                    <hr />
                    <h1><span className="material-icons">location_searching</span> Contact</h1>
                    <hr />
                    <Row>
                        <Col>
                            <hr />
                                <h1><span class="material-icons">coffee</span> Contact</h1>
                            <hr />
                        </Col>
                        <Col>
                            <hr />
                                <h1><span class="material-icons">coffee</span> Contact</h1>
                            <hr />
                        </Col>
                        <Col>
                            <hr />
                                <h1><span class="material-icons">coffee</span> Contact</h1>
                            <hr />
                        </Col>
                    </Row>
                    <hr />
                </Col>
            </Row>
        </Container>
    )
};

export default Contact;