import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import './Menu.css';

const Menu = () => {
    return (
        <div className="menu">
            <Container className="datos personales">
                <Row>
                    <Col>
                        <Nav.Link exact={true} href="/" style={{ paddingLeft: '0' }}>
                            <img src="images/profile.jpeg" alt="Full Stack Developer" title="Full Stack Developer" />
                        </Nav.Link>
                        <h1>Axel L.<br />Obscura Sarzotti</h1>
                        <h2>Full Stack Developer</h2>
                        <hr />
                        <p className="text-left"><i class="material-icons">call</i> (52)(55) 3220-6321</p>
                        <p className="text-left"><i class="material-icons">email</i> axosar@gmail.com</p>
                        <p className="text-left"><i class="material-icons">directions</i> Mexico City</p>
                    </Col>
                </Row>
            </Container>
            <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link href="/professional-summary" eventKey="activo">Professional Summary</Nav.Link>
                <Nav.Link href="/datos" eventKey="activo">Technical Summary</Nav.Link>
                <Nav.Link href="/datos" eventKey="activo">Education</Nav.Link>
                <Nav.Link href="/datos" eventKey="activo">Languages</Nav.Link>
                <Nav.Link href="/datos" eventKey="activo">Professional Experience</Nav.Link>
                <Nav.Link href="/datos" eventKey="activo">Contact</Nav.Link>
            </Nav>
            <Container className="redessociales">
                <Row style={{ display: 'none' }}>
                    <Col><i class="material-icons">twitter</i></Col>
                    <Col><i class="material-icons">facebook</i></Col>
                    <Col><i class="material-icons">linkedin</i></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Menu;