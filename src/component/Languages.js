import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProfessionalSummary.css';

const Languages = () => {
    return (
        <Container className="ps ts">
            <Row>
                <Col>
                    <hr />
                    <h1><span className="material-icons">location_searching</span> Languages Summary</h1>
                    <hr />
                    <h2><span className="material-icons droper">keyboard_arrow_right</span> SPANISH - NATIVE</h2>
                    <hr />
                    <h2><span className="material-icons droper">keyboard_arrow_right</span> ENGLISH – C/90%, R/97%, S/93%</h2>
                    <hr />
                    <h2><span className="material-icons droper">keyboard_arrow_right</span> FRENCH  – C/85%, R/72%, S/87%</h2>
                    <hr />
                </Col>
            </Row>
        </Container>
    )
};

export default Languages;