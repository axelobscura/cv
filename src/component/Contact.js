import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProfessionalSummary.css';

const Contact = () => {
    return (
        <Container className="ps ts contacto">
            <Row>
                <Col>
                    <hr />
                    <h1><span className="material-icons">location_searching</span> Contact</h1>
                    <hr />
                    <Row>
                        <Col>
                            <hr />
                                <h1><span class="material-icons">mail</span> Email</h1>
                                <h3><a href="mailto:axosar@gmail.com">axosar@gmail.com</a></h3>
                            <hr />
                        </Col>
                        <Col>
                            <hr />
                                <h1><span class="material-icons">call</span> Phone</h1>
                                <h3><a href="tel:525532206321">(52) 55 3220 6321</a></h3>
                            <hr />
                        </Col>
                        <Col>
                            <hr />
                                <h1><span class="material-icons">call</span> LinkedIn</h1>
                                <h3><a href="tel:525532206321">(52) 55 3220 6321</a></h3>
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