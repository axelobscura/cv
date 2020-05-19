import React from 'react';
import { withRouter } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import './Menu.css';

const Menu = () => {
    return (
        <div className="menu">
            <Container className="datos personales">
                <Row>
                    <Col>
                        <Nav.Link href="/" style={{ paddingLeft: '0' }}>
                            <img src="images/profile.jpeg" alt="Full Stack Developer" title="Full Stack Developer" />
                        </Nav.Link>
                        <h1>Axel L.<br />Obscura Sarzotti</h1>
                        <h2>Full Stack Developer</h2>
                        <hr />
                        <p className="text-left"><i className="material-icons">call</i> (52)(55) 3220-6321</p>
                        <p className="text-left"><i className="material-icons">email</i> axosar@gmail.com</p>
                        <p className="text-left"><i className="material-icons">directions</i> Mexico City</p>
                    </Col>
                </Row>
            </Container>
            <Navbar collapseOnSelect className="flex-column menucv">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav defaultActiveKey="/" className="flex-column menucv">
                        <Nav.Link activeClassName="active" href="/professional-summary">
                            <span className="material-icons">keyboard_arrow_right</span> Professional Summary
                        </Nav.Link>
                        <Nav.Link href="/datos">
                            <span className="material-icons">keyboard_arrow_right</span> Technical Summary
                        </Nav.Link>
                        <Nav.Link href="/datos">
                            <span className="material-icons">keyboard_arrow_right</span> Education
                        </Nav.Link>
                        <Nav.Link href="/datos">
                            <span className="material-icons">keyboard_arrow_right</span> Languages
                        </Nav.Link>
                        <Nav.Link href="/datos">
                            <span className="material-icons">keyboard_arrow_right</span> Professional Experience
                        </Nav.Link>
                        <Nav.Link href="/datos">
                            <span className="material-icons">keyboard_arrow_right</span> Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Container className="redessociales">
                <Row style={{ display: 'none' }}>
                    <Col><i className="material-icons">twitter</i></Col>
                    <Col><i className="material-icons">facebook</i></Col>
                    <Col><i className="material-icons">linkedin</i></Col>
                </Row>
            </Container>
        </div>
    )
}

export default withRouter(Menu);