import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Menu from './Menu';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Datos from './Datos';
import Entrada from './Entrada';
import Technical from './Technical';
import { Link } from "react-router-dom";
import './Home.css';
import profile from '../profile.jpeg';

const Home = () => {
    const [count, setCount] = useState(Math.floor(Math.random() * 1000));
    const [imagen, imagenCount] = useState(`https://i.picsum.photos/id/${count}/1500/1500.jpg`);
    const accion = () => {
        setCount((Math.floor(Math.random() * 1000)));
        imagenCount(`https://i.picsum.photos/id/${count}/1500/1500.jpg`);
    }
    const styles = {
        container: {
            alignItems: 'center',
            margin: '0',
            padding: '0'
        },
        col: {

        },
        row: {

        },
        contenido: {
            width: '100%',
            height: '90vh',
            margin: '5px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            borderTop: '5px solid #111',
            overflow: 'hidden'
        }
    }
    return (
        <>
            <Container fluid={true} className="d-flex" style={styles.container}>
                <Row>
                    <Col sm={12} style={{ background: '#f2f2f2', padding: '0.3em' }}></Col>
                </Row>
            </Container>
            <Container fluid={true} className="d-flex" style={styles.container}>
                <Row>
                    <Col sm={2} style={{ background: '#111111' }}></Col>
                    <Col sm={6} style={{ background: '#f2f2f2' }}>
                        <Link to="/datos">
                            <h1 style={{ fontSize: '1.9em', padding: '40px 0 0 0', textAlign: 'left', fontWeight: '100' }}>Axel Laurent<br />Obscura Sarzotti</h1>
                        </Link>
                        <h2 style={{ fontSize: '0.9em', paddingBottom: '40px', textAlign: 'left', fontWeight: 'bold' }}>Full Stack Developer</h2>
                    </Col>
                    <Col sm={4} style={{ background: '#111111', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
                        <a href="//twitter.com/axelobscura?lang=en" target="_blank">
                            <p className="redes"><i class='lni lni-twitter-filled'></i> | @axelobscura</p>
                        </a>
                        <a href="//mx.linkedin.com/in/axelobscura" target="_blank">
                            <p className="redes"><i class='lni lni-linkedin'></i> | /in/axelobscura</p>
                        </a>
                        <a href="//github.com/axelobscura/" target="_blank">
                            <p className="redes"><i class='lni lni-github'></i> | /axelobscura</p>
                        </a>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className="d-flex" style={styles.container}>
                <Row className="colProfile">
                    <Col sm={4} style={{ background: '#dedede', padding: '0.7em' }}>
                        <h1>PROFILE<i class='lni lni-chevron-right flecha'></i> <i class='lni lni-user'></i></h1>
                        <div className="d-flex justify-content-between">
                            <div>
                                <div className="picture miab axel">
                                    <img src={profile} alt="Axel Laurent Obscura Sarzotti" title="Axel Laurent Obscura Sarzotti" />
                                </div>
                            </div>
                            <div>
                                <p className="p-0 m-2"><b>Senior Full Stack Web Developer</b> with 15 years of experience designing and developing backend architectures, decoupled and n-tier frontend web applications using <b>HTML, CSS, JavaScript, JQuery, AJAX, JSON, API, XML, PYTHON, PHP, SQL, NodeJS, Express, PostgressSQL, MongoDB, ReactJS, Angular, VueJS, NextJS</b>.</p>
                            </div>
                        </div>
                        <h1 className="mt-3">EDUCATION<i class='lni lni-chevron-right flecha'></i> <i class='lni lni-home'></i></h1>
                        <h1 className="mt-3">SKILLS<i class='lni lni-chevron-right flecha'></i> <i class='lni lni-bi-cycle'></i></h1>
                        <h1 className="mt-3">WORK EXPERIENCE<i class='lni lni-chevron-right flecha'></i> <i class='lni lni-cog'></i></h1>
                        <h1 className="mt-3">CONTACT<i class='lni lni-chevron-right flecha'></i> <i class='lni lni-telegram'></i></h1>
                    </Col>
                    <Col sm={8} style={{ background: '#f4f4f4', padding: '0.7em' }}>
                        <Switch>
                            <Route exact path="/">
                                <Entrada />
                            </Route>
                            <Route exact path="/datos">
                                <Datos />
                            </Route>
                            <Route exact path="/technical-full-stack">
                                <Technical />
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>

        </>


    )
}

export default Home;