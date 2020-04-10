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
import datosx from "../data/data2020";

const Home = () => {
    const [seleccionado, setSeleccionado] = useState('PROFILE');
    function sayHello(e) {
        const clicked = e.target.id;
        if (seleccionado === clicked) {
            setSeleccionado('');
        } else {
            setSeleccionado(clicked);
        }
    }
    let datosSeccion = [];
    datosx.sections.filter(item => {
        if (item.name === seleccionado) {
            datosSeccion.push({ 'nombre': item.name, 'icono': item.icono, 'datos': item.datos });
        }
    })
    console.log(datosSeccion);
    return (
        <>
            <Container fluid={true} className="d-flex">
                <Row>
                    {datosSeccion.map((seccion, index) => (
                        <Col sm={12} style={{ background: '#333', padding: '0', color: '#fff', fontSize: '0.5rem', color: '#fff', fontWeight: 'bold', textAlign: 'left' }}><h1 style={{ padding: '0', color: '#fff', fontWeight: 'bold' }}>{seccion.nombre}</h1></Col>
                    ))}
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
                        {datosx.sections.map((seccion, i) => (
                            <Link to="/datos" key={i}>
                                <h1>{seccion.name}<i className={`lni lni-chevron-right flecha ${seleccionado === seccion.name ? 'seleccionado' : 'noSeleccionado'}`} onClick={sayHello} id={seccion.name}></i> <i className={`lni ${seccion.icono}`}></i>
                                </h1>
                            </Link>
                        ))}
                    </Col>
                    <Col sm={8} style={{ background: '#fff', padding: '0' }}>
                        <Switch>
                            <Route exact path="/">
                                <Entrada />
                            </Route>
                            <Route exact path="/datos">
                                <Datos titulo={seleccionado} datos={datosx.sections} />
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