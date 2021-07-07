import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from "react-router-dom";
import './Menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <Container className="datos personales">
                    <Row>
                        <Col>
                            <Nav.Link href="/" style={{ paddingLeft: '0' }}>
                                <img src="images/profile.jpeg" alt="Full Stack Developer" title="Full Stack Developer" />
                            </Nav.Link>
                            <Link to="/"><h1>Axel Laurent<br />Obscura Sarzotti</h1></Link>
                            <h2>Senior Full Stack Developer</h2>
                            <p className="text-center"><small>MEXICO CITY</small></p>
                        </Col>
                    </Row>
                </Container>
                <Navbar collapseOnSelect className="flex-column menucv">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav defaultActiveKey="/" className="flex-column menucv">
                            <NavLink activeClassName="active" to="/technical-summary">
                                <span className="material-icons">keyboard_arrow_right</span> Technical Summary
                            </NavLink>
                            <NavLink activeClassName="active" to="/professional-summary">
                                <span className="material-icons">keyboard_arrow_right</span> Professional Summary
                            </NavLink>
                            <NavLink activeClassName="active" to="/education">
                                <span className="material-icons">keyboard_arrow_right</span> Education
                            </NavLink>
                            <NavLink activeClassName="active" to="/languages">
                                <span className="material-icons">keyboard_arrow_right</span> Languages
                            </NavLink>
                            <NavLink activeClassName="active" to="/contact">
                                <span className="material-icons">keyboard_arrow_right</span> Contact
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container className="datos personales">
                    <Row>
                        <Col>
                            <hr />
                            <p className="text-left"><i className="material-icons">call</i> (52)(55) 3220-6321</p>
                            <p className="text-left"><i className="material-icons">email</i> axosar@gmail.com</p>
                            <p className="text-left"><i className="material-icons">directions</i> Mexico City</p>
                            <p className="text-left"><i className="material-icons">bug_report</i> @axelobscura</p>
                        </Col>
                    </Row>
                </Container>
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
}

export default withRouter(Menu);