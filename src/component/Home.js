import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
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
    const [seleccionado, setSeleccionado] = useState('noSeleccionado')
    const accion = () => {
        setCount((Math.floor(Math.random() * 1000)));
        imagenCount(`https://i.picsum.photos/id/${count}/1500/1500.jpg`);
    }
    function sayHello(dato) {
        console.log(dato);
        setSeleccionado('seleccionado');
    }
    return (
        <>
            <Container fluid={true} className="d-flex">
                <Row>
                    <Col sm={12} style={{ background: '#fff', padding: '0.3em' }}></Col>
                </Row>
            </Container>
            <Container fluid={true} className="d-flex">
                <Row>
                    <Col sm={2} style={{ background: '#111111' }}></Col>
                    <Col sm={6} style={{ background: '#f2f2f2' }}>
                        <Link to="/datos">
                            <h1 style={{ fontSize: '1.9em', padding: '20px 0 0 0', textAlign: 'left', fontWeight: '100' }}>Axel Laurent<br />Obscura Sarzotti</h1>
                        </Link>
                        <h2 style={{ fontSize: '0.9em', paddingBottom: '20px', textAlign: 'left', fontWeight: 'bold' }}>Full Stack Developer</h2>
                    </Col>
                    <Col sm={4} style={{ background: '#111111', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
                        <a href="//twitter.com/axelobscura?lang=en" target="_blank">
                            <p className="redes"><i className='lni lni-twitter-filled'></i> | @axelobscura</p>
                        </a>
                        <a href="//mx.linkedin.com/in/axelobscura" target="_blank">
                            <p className="redes"><i className='lni lni-linkedin'></i> | /in/axelobscura</p>
                        </a>
                        <a href="//github.com/axelobscura/" target="_blank">
                            <p className="redes"><i className='lni lni-github'></i> | /axelobscura</p>
                        </a>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className="d-flex">
                <Row className="colProfile">
                    <Col sm={4} style={{ background: '#dedede', padding: '0.7em' }}>
                        <Link to="/">
                            <h1 onClick={() => sayHello('profile')}>PROFILE<i className={`lni lni-chevron-right flecha ${seleccionado}`}></i> <i className='lni lni-user'></i>
                            </h1>
                        </Link>
                        <div className="d-flex justify-content-center align-items-center">
                            <div>
                                <div className="picture miab axel">
                                    <img src={profile} alt="Axel Laurent Obscura Sarzotti" title="Axel Laurent Obscura Sarzotti" />
                                </div>
                            </div>
                            <div>
                                <p className="p-0 m-2"><b>Senior Full Stack Web Developer</b> with 16 years of experience designing and developing backend architectures, decoupled and entier back to front web applications using <b>HTML, CSS, JavaScript, JQuery, AJAX, JSON, API, XML, PYTHON, PHP, Laravel, Cake, SQL, PostgressSQL, MongoDB, NodeJS, Express, ReactJS, Angular, VueJS, NextJS, PWA, Wordpress, Joomla, Drupal, Magento</b>.</p>
                            </div>
                        </div>
                        <Link to="/datos">
                            <h1 className="mt-3" onClick={() => sayHello('education')}>EDUCATION<i className={`lni lni-chevron-right flecha ${seleccionado}`}></i> <i className='lni lni-home'></i>
                            </h1>
                        </Link>
                        <Link to="/technical-full-stack">
                            <h1 className="mt-3" onClick={() => sayHello('skills')}>SKILLS<i className={`lni lni-chevron-right flecha ${seleccionado}`}></i> <i className='lni lni-bi-cycle'></i>
                            </h1>
                        </Link>
                        <Link to="/technical-full-stack">
                            <h1 className="mt-3" onClick={() => sayHello('work')}>WORK EXPERIENCE<i className={`lni lni-chevron-right flecha ${seleccionado}`}></i> <i className='lni lni-cog'></i>
                            </h1>
                        </Link>
                        <Link to="/technical-full-stack">
                            <h1 className="mt-3" onClick={() => sayHello('work')}>PORTFOLIO<i className={`lni lni-chevron-right flecha ${seleccionado}`}></i> <i className='lni lni-brush-alt'></i>
                            </h1>
                        </Link>
                        <Link to="/technical-full-stack">
                            <h1 className="mt-3" onClick={() => sayHello}>CONTACT<i className={`lni lni-chevron-right flecha ${seleccionado}`}></i> <i className='lni lni-telegram'></i>
                            </h1>
                        </Link>
                    </Col>
                    <Col sm={8} style={{ background: '#fff', padding: '0.7em' }}>
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