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
                <hr />
            </Col>

        </Row>
        <Row className="iconosDev">
            <Col sm={3}>
                <h1><span class="material-icons">brightness_high</span> Skills</h1>
            </Col>
            <Col sm={9}>
                <i class="devicon-javascript-plain"></i>
                <i class="devicon-typescript-plain"></i>
                <i class="devicon-react-original"></i>
                <i class="devicon-angularjs-plain"></i>
                <i class="devicon-vuejs-plain"></i>
                <i class="devicon-git-plain"></i>
                <i class="devicon-jquery-plain"></i>
                <i class="devicon-html5-plain"></i>
                <i class="devicon-jasmine-plain"></i>
                <i class="devicon-bootstrap-plain"></i>
                <i class="devicon-css3-plain"></i>
                <i class="devicon-nodejs-plain"></i>
                <i class="devicon-express-original"></i>
                <i class="devicon-php-plain"></i>
                <i class="devicon-trello-plain"></i>
                <i class="devicon-visualstudio-plain"></i>
                <i class="devicon-webpack-plain"></i>
                <i class="devicon-wordpress-plain"></i>
                <i class="devicon-zend-plain"></i>
                <i class="devicon-mocha-plain"></i>
                <i class="devicon-laravel-plain"></i>
                <i class="devicon-less-plain-wordmark"></i>
                <i class="devicon-mongodb-plain"></i>
                <i class="devicon-mysql-plain"></i>
                <i class="devicon-sass-original"></i>
                <i class="devicon-ssh-plain"></i>
            </Col>
        </Row>
        <hr />
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
        <Row>
            <Col>
                <hr />
                <h1><span class="material-icons">brightness_auto</span> Summary</h1>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col sm={6}>
                <ul>
                    <li>+10 Years of software design experience in developing enterprise applications</li>
                    <li>Experience in both <b>Client Side</b> and <b>Server Side</b> Programming</li>
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