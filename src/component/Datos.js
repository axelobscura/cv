import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Noticias from './Noticias';
import data from "../data/data";
import './Datos.css';
import profileImage from '../profile.jpeg';

const profile = data.profile;

const Datos = (props) => {
    const detalles = [];
    console.log(props.datos);
    let datosSeccion = [];
    props.datos.filter(item => {
        if (item.name === props.titulo) {
            datosSeccion.push({ 'nombre': item.name, 'icono': item.icono, 'datos': item.datos });
        }
    })
    console.log(datosSeccion);
    return (
        <Container fluid={true} style={{ margin: '0', padding: '0.2em' }}>
            <Row>
                <Col sm={12} style={{ padding: '0.3em', borderLeft: '2px solid red' }}>
                    {datosSeccion.map((seccion, index) => (
                        <div>
                            <h1 key={index} style={{
                                background: 'red',
                                color: '#fff',
                                padding: '5px'
                            }}><i className={`lni ${seccion.icono}`}></i> {seccion.nombre}</h1>
                            <p className="p-0 m-2"><b>{seccion.datos}</b>.</p>
                        </div>
                    ))}

                    <div className="d-flex justify-content-center align-items-center">
                        <div>
                            <div className="picture miab axel">
                                <img src={profileImage} alt="Axel Laurent Obscura Sarzotti" title="Axel Laurent Obscura Sarzotti" />
                            </div>
                        </div>
                    </div>
                    <div className="datos">
                        {profile.map((p, index) => (
                            <div key={index}>
                                <h2>{p.name}</h2>
                                <p className="p-0 m-0">{p.role}</p>
                                <h3>{p.email}</h3>
                                <p>{p.phone}</p>
                                <Noticias tag={'p'} speed={5} detalles={p.summaryDetails} />
                                <hr />
                                <h1>PROFESSIONAL SUMMARY</h1>
                                <hr />
                                <p>{p.summary}</p>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>

        </Container>

    )
};

export default Datos;