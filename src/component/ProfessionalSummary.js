import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProfessionalSummary.css';

export default () => (
    <Container className="ps">
        <Row>
            <Col>
                <hr />
                <h1><span class="material-icons">location_searching</span> Professional Summary</h1>
                <hr />
                <p>Full stack JavaScript developer with hands on experience of designing, developing and maintaining web as well as mobile applications. Possesses diverse experience of creating multiple highly scalable applications <b>using different tech stacks</b>. Adept at understanding the requirements of the clients and delivering projects accordingly. Demonstrates the capability of maintaining code by fixing bugs as well as conducting end to end testing. Highly skilled at collaborating with team members to ship beautiful products within deadlines. Looking forward to applying the acquired gamut of skills in a challenging role.</p>
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
                <h1><span class="material-icons">brightness_high</span> Skills</h1>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col sm={3}>
                <h2><span class="material-icons">keyboard_arrow_right</span> Front End</h2>
                <ul>
                    <li>Javascript [ES5/ES6]</li>
                    <li>Jquery, Ajax</li>
                    <li>HTML5, HTML5 Canvas</li>
                    <li>React, Angular, Vue, Backbone, JAMStack</li>
                    <li>NextJS</li>
                    <li>Bootstrap, Skeleton</li>
                    <li>CSS, CSS3, Sass, Less, Bower</li>
                </ul>
            </Col>
            <Col sm={3}>
                <h2><span class="material-icons">keyboard_arrow_right</span> Back End</h2>
                <ul>
                    <li>Node NPM</li>
                    <li>Express, Sails.js</li>
                    <li>PHP</li>
                    <li>.NET</li>
                    <li>SQL, MongoDB, postgress</li>
                    <li>Flux Pattern</li>
                    <li>Model-View-Controller</li>
                </ul>
            </Col>
            <Col sm={3}>
                <h2><span class="material-icons">keyboard_arrow_right</span> Dev Ops</h2>
                <ul>
                    <li>Elastik Beanstalk</li>
                    <li>EC2</li>
                    <li>Elasticache MS</li>
                    <li>IAM, S3</li>
                    <li>Azure</li>
                </ul>
            </Col>
            <Col sm={3}>
                <h2><span class="material-icons">keyboard_arrow_right</span> Miscellaneous</h2>
                <ul>
                    <li>Git, Bitbucket</li>
                    <li>Test Driven Development</li>
                    <li>Unit Testing, Mocha, Gruntt, Jest</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>MicroServices</li>
                </ul>
            </Col>
        </Row>
    </Container>
);