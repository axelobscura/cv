import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProfessionalSummary.css';

export default () => (
    <Container className="ps tech">
        <Row>
            <Col>
                <hr />
                <h1><span className="material-icons">location_searching</span> Technical Summary</h1>
                <hr />
                <p>Senior Full Stack Web Developer with 17 years of experience designing and developing backend architectures, decoupled and entier frontend web and backend applications using HTML, CSS, JavaScript, JQuery, AJAX, JSON, XML, NodeJS, Express, PHP, MySQL, PosgressSQL,  Angular, ReactJS, VueJS, NextJS.<br/><br/>Full Stack Developer with hands on experience of designing, developing and maintaining web apps as well as mobile applications. Possesses diverse experience of creating multiple highly scalable applications <b>using different tech stacks</b>. Adept at understanding the requirements of the clients and delivering projects accordingly. Demonstrates the capability of maintaining code by fixing bugs as well as conducting end to end testing. Highly skilled at collaborating with team members to ship beautiful products within deadlines. Looking forward to applying the acquired gamut of skills in a challenging role.</p>
            </Col>
        </Row>
        <Row className="iconosDev align-items-center">
            <Col sm={1}>
            <hr />
                <h1>Skills</h1>
            </Col>
            <Col sm={11}>
            <hr />
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-typescript-plain"></i>
                <i className="devicon-react-original"></i>
                <i className="devicon-angularjs-plain"></i>
                <i className="devicon-vuejs-plain"></i>
                <i className="devicon-git-plain"></i>
                <i className="devicon-jquery-plain"></i>
                <i className="devicon-html5-plain"></i>
                <i className="devicon-jasmine-plain"></i>
                <i className="devicon-bootstrap-plain"></i>
                <i className="devicon-css3-plain"></i>
                <i className="devicon-nodejs-plain"></i>
                <i className="devicon-express-original"></i>
                <i className="devicon-php-plain"></i>
                <i className="devicon-trello-plain"></i>
                <i className="devicon-visualstudio-plain"></i>
                <i className="devicon-webpack-plain"></i>
                <i className="devicon-wordpress-plain"></i>
                <i className="devicon-zend-plain"></i>
                <i className="devicon-mocha-plain"></i>
                <i className="devicon-laravel-plain"></i>
                <i className="devicon-less-plain-wordmark"></i>
                <i className="devicon-mongodb-plain"></i>
                <i className="devicon-mysql-plain"></i>
                <i className="devicon-sass-original"></i>
                <i className="devicon-ssh-plain"></i>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col sm={3}>
                <h2><span className="material-icons">keyboard_arrow_right</span> Front End</h2>
                <ul>
                    <li>Javascript [ES5/ES6]</li>
                    <li>Jquery</li>
                    <li>Ajax</li>
                    <li>HTML5, HTML5 Canvas</li>
                    <li>ReactJS</li>
                    <li>NextJS</li>
                    <li>Angular</li>
                    <li>VueJS</li>
                    <li>JAMStack</li>
                    <li>NextJS</li>
                    <li>Bootstrap</li>
                    <li>Tailwind</li>
                    <li>Skeleton</li>
                    <li>CSS, CSS3, Sass, Less, Bower</li>
                </ul>
            </Col>
            <Col sm={3}>
                <h2><span className="material-icons">keyboard_arrow_right</span> Back End</h2>
                <ul>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>PHP</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>.NET</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>Postgress</li>
                    <li>Flux Pattern</li>
                    <li>Model-View-Controller</li>
                </ul>
            </Col>
            <Col sm={3}>
                <h2><span className="material-icons">keyboard_arrow_right</span> Dev Ops</h2>
                <ul>
                    <li>Elastik Beanstalk</li>
                    <li>EC2</li>
                    <li>Elasticache MS</li>
                    <li>AWS</li>
                    <li>Azure</li>
                    <li>Digital Ocean</li>
                </ul>
            </Col>
            <Col sm={3}>
                <h2><span className="material-icons">keyboard_arrow_right</span> Miscellaneous</h2>
                <ul>
                    <li>Git</li>
                    <li>Bitbucket</li>
                    <li>Test Driven Development</li>
                    <li>Unit Testing, Mocha, Gruntt, Jest</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>MicroServices</li>
                </ul>
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
                <h1><span className="material-icons">brightness_auto</span> Summary</h1>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col sm={6}>
                <ul>
                    <li>+17 Years of software design experience in developing enterprise applications</li>
                    <li>Experience in both <b>Frontend/Client Side</b> and <b>Backend/Server Side</b> Programming</li>
                    <li>Background in all phases of software engineering, including Analysis, Design, Coding, Testing and Implementation as well as <b>Agile</b> software development using Github</li>
                    <li>Experience in <b>NodeJS</b> backend programming and <b>Object Oriented Javascript</b></li>
                    <li>Exxtensive experience building all kinds of web apps with <b>Wordpress</b></li>
                </ul>
            </Col>
            <Col sm={6}>
                <ul>
                    <li>Frontend Development Skills in <b>HTML/CSS/Javascript</b> and <b>Responsive Design</b></li>
                    <li>Extensive experience building web apps with frameworks like <b>ReactJS, Angular +2 and VueJS</b></li>
                    <li>Task and project management with Jira, BitBucket, Git</li>
                    <li>Develop and design new functionality and features inline with <b>functional specifications and business requirements</b></li>
                </ul>
            </Col>
        </Row>
    </Container>
);