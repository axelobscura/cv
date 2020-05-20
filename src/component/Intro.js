import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import './Intro.css';

export default () => (
    <Container className="intro" fluid>
        <Row className="m-0 p-0">
            <Col sm={12} className="m-0 p-0">
                <h1>Welcome!</h1>
                <h2>I'm Axel Laurent</h2>
                <div className="m-3">
                    <i className="devicon-javascript-plain m-2"></i>
                    <i className="devicon-typescript-plain m-2"></i>
                    <i className="devicon-react-original m-2"></i>
                    <i className="devicon-angularjs-plain m-2"></i>
                    <i className="devicon-vuejs-plain m-2"></i>
                    <i className="devicon-git-plain m-2"></i>
                    <i className="devicon-jquery-plain m-2"></i>
                    <i className="devicon-html5-plain m-2"></i>
                    <i className="devicon-jasmine-plain m-2"></i>
                    <i className="devicon-bootstrap-plain m-2"></i>
                    <i className="devicon-css3-plain m-2"></i>
                    <i className="devicon-nodejs-plain m-2"></i>
                    <i className="devicon-express-original m-2"></i>
                    <i className="devicon-php-plain m-2"></i>
                    <i className="devicon-trello-plain m-2"></i>
                    <i className="devicon-visualstudio-plain m-2"></i>
                    <i className="devicon-webpack-plain m-2"></i>
                    <i className="devicon-wordpress-plain m-2"></i>
                    <i className="devicon-zend-plain m-2"></i>
                    <i className="devicon-mocha-plain m-2"></i>
                    <i className="devicon-laravel-plain m-2"></i>
                    <i className="devicon-less-plain-wordmark m-2"></i>
                    <i className="devicon-mongodb-plain m-2"></i>
                    <i className="devicon-mysql-plain m-2"></i>
                    <i className="devicon-sass-original m-2"></i>
                    <i className="devicon-ssh-plain m-2"></i>
                </div>
                <hr />
                <p>Senior Full stack JavaScript developer from México with hands on<br />experience of designing, developing and maintaining web apps as well as mobile applications.<br />Possesses diverse experience of creating multiple highly scalable applications <b>using different tech stacks</b></p>
                <Link to="/professional-summary"><button className="btn">Professional Summary</button></Link>
            </Col>
        </Row>
    </Container>
);