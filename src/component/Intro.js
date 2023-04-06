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
                <h1 className="m-1 mb-0">Welcome</h1>
                <h2 className="mt-0 pt-0">I'm Axel Laurent Obscura Sarzotti</h2>
                <div className="icod m-1">
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
                </div>
                <div className="icod m-1">
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
                <h3><b>Senior Full Stack Developer</b></h3>
                <p>With 19 years of experience designing, developing and maintaining web and mobile applications<br />extensive experience creating multiple highly scalable applications <b>using different modern tech stacks</b></p>
                <Link to="/professional-summary"><button className="btn m-3">Professional Summary</button></Link>
            </Col>
        </Row>
    </Container>
);