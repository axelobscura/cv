import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProfessionalSummary.css';

const Education = () => {
    return (
        <Container className="ps ts ed">
            <Row>
                <Col>
                    <hr />
                    <h1><span className="material-icons">location_searching</span> Education-Summary</h1>
                    <hr />
                    <h2><span className="material-icons droper">keyboard_arrow_right</span> BACHELOR’S DEGREE IN GRAPHIC & DIGITAL COMMUNICATIONS | WEB DEVELOPMENT</h2>
                    <h3>UNIVERSIDAD AUTÓNOMA METROPOLITANA</h3>
                    <p>YEAR OF COMPLETION: 2004</p>
                    <hr />
                    <h2><span className="material-icons droper">keyboard_arrow_right</span> MASTER’S DEGREE IN VISUAL ARTS / BRANCH WEB DESIGN AND DIGITAL DEVELOPMENT</h2>
                    <h3>UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO</h3>
                    <p>YEAR OF COMPLETION: 2008</p>
                    <hr />
                    <h2><span className="material-icons droper">keyboard_arrow_right</span> MASTER’S DEGREE IN SYSTEM ENGINEERING (IN PROCESS)</h2>
                    <h3>UNIVERSIDAD INTERNACIONAL DE LA RIOJA</h3>
                    <p>IN PROCESS: 2019</p>
                    <hr />
                    <h2><span className="material-icons droper">keyboard_arrow_right</span> FULL-STACK ENGINEER (IN PROCESS)</h2>
                    <h3>CODE ACADEMY</h3>
                    <p>IN PROCESS: 2021</p>
                    <hr />
                    <h1><span className="material-icons">location_searching</span> COURSES</h1>
                    <hr />
                    <p className="p-0 m-0"><b>Angular: From Zero to Hero</b></p>
                    <p className="p-0 m-0">Asim Hussain</p>
                    <hr />
                    <p className="p-0 m-0"><b>Advanced Javascript</b></p>
                    <p className="p-0 m-0">Asim Hussain</p>
                    <hr />
                    <p className="p-0 m-0"><b>Modern React with Redux</b></p>
                    <p className="p-0 m-0">Stephen Grider</p>
                    <hr />
                    <p className="p-0 m-0"><b>Angular (2/4) NodeJS – The MEAN Stack</b></p>
                    <p className="p-0 m-0">Maximilian Schwarzmüller</p>
                    <hr />
                    <p className="p-0 m-0"><b>Angular – The complete Guide</b></p>
                    <p className="p-0 m-0">Maximilian Schwarzmüller</p>
                    <hr />
                    <p className="p-0 m-0"><b>The complete Javascript Course: Build a Real-World APP</b></p>
                    <p className="p-0 m-0">Jonas Schmedtmann</p>
                    <hr />
                    <p className="p-0 m-0"><b>Web Design for Web Developers: Build Beautiful</b></p>
                    <p className="p-0 m-0">Jonas Schmedtmann</p>
                    <hr />
                    <p className="p-0 m-0"><b>Learn and Understand NodeJS</b></p>
                    <p className="p-0 m-0">Anthony Alicea</p>
                </Col>
            </Row>
        </Container>
    )
};

export default Education;
