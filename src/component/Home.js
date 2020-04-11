import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Datos from './Datos';
import data from "../data/data";
import Entrada from './Entrada';
import Technical from './Technical';
import Noticias from './Noticias';
import { Link } from "react-router-dom";
import './Home.css';
import datosx from "../data/data2020";

const profile = data.profile;

const Home = () => {
    const [seleccionado, setSeleccionado] = useState('PROFILE');
    const [color, setColor] = useState('#333');

    let datosSeccion = [];
    datosx.sections.filter(item => {
        if (item.name === seleccionado) {
            datosSeccion.push({ 'nombre': item.name, 'icono': item.icono, 'color': item.color, 'datos': item.datos, 'imagen': item.imagen });

        };

    });

    function sayHello(e) {
        const clicked = e.target.id;
        const colory = e.target.getAttribute('color');
        if (seleccionado === clicked) {
            setSeleccionado('');
        } else {
            setSeleccionado(clicked);
        }
        console.log('el color ' + e.target.color);
        setColor(colory);
    }

    console.log(color);
    return (
        <>
            <Container fluid={true} className="d-flex">
                <Row>
                    {datosSeccion.map((seccion, index) => (
                        <Col key={index} sm={12} style={{ background: `${seccion.color}`, padding: '0.4em', color: '#fff', fontSize: '0.5rem', color: '#fff', fontWeight: 'bold', textAlign: 'left' }}></Col>
                    ))}
                </Row>
            </Container>
            <Container fluid={true} className="d-flex">
                <Row>
                    <Col sm={2} style={{ background: `${color}` }}>
                        {datosSeccion.map((seccion, index) => (
                            <h1 key={index} style={{
                                fontWeight: '900',
                                color: '#fff',
                                position: 'absolute',
                                right: '1px',
                                top: '-10px',
                                fontSize: '5em'
                            }}>{seccion.nombre[0]}{seccion.nombre[1]}</h1>
                        ))}
                    </Col>
                    <Col sm={6} style={{ background: '#f2f2f2' }}>
                        <Link to="/datos">
                            <h1 style={{ fontSize: '1em', padding: '20px 0 0 0', textAlign: 'left', fontWeight: '100' }}>Axel Laurent<br />Obscura Sarzotti</h1>
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
                    <Col sm={12} style={{ background: '#fff', padding: '0.3em' }}>
                        {profile.map((p, index) => (
                            <div key={index}>
                                <Noticias tag={'p'} speed={5} detalles={p.summaryDetails} />
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className="d-flex">
                <Row className="colProfile">
                    <Col sm={4} style={{ background: '#dedede', padding: '0.7em' }}>
                        {datosx.sections.map((seccion, index) => (
                            <Link to="/datos" key={index}>
                                <h1 className={`${seleccionado === seccion.name ? 'seleccionadoText' : 'noSeleccionadoText'}`}>{seccion.name}<i className={`lni lni-chevron-right flecha ${seleccionado === seccion.name ? 'seleccionado' : 'noSeleccionado'}`} onClick={sayHello} id={seccion.name} color={seccion.color}></i> <i className={`lni ${seccion.icono}`}></i>
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