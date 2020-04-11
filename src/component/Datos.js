import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Noticias from './Noticias';
import './Datos.css';
import profileImage from '../profile.jpeg';


const Datos = (props) => {
    const detalles = [];
    //console.log(props.datos);
    let datosSeccion = [];
    props.datos.filter(item => {
        if (item.name === props.titulo) {
            datosSeccion.push({ 'nombre': item.name, 'icono': item.icono, 'color': item.color, 'datos': item.datos });
        }
    })
    //console.log(datosSeccion);
    return (
        <Container fluid={true} style={{ margin: '0', padding: '0' }}>
            <Row>
                <Col sm={12} style={{ padding: '0', borderLeft: '2px solid red' }}>
                    {datosSeccion.map((seccion, index) => (
                        <div key={index}>
                            <h1 key={index} style={{
                                background: `${seccion.color}`,
                                color: '#fff',
                                padding: '13px'
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

                    </div>
                </Col>
            </Row>

        </Container>

    )
};

export default Datos;