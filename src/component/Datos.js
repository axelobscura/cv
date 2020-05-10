import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Datos.css';

const Datos = (props) => {
    const detalles = [];
    //console.log(props.datos);
    let datosSeccion = [];
    props.datos.filter(item => {
        if (item.name === props.titulo) {
            datosSeccion.push({
                'nombre': item.name,
                'icono': item.icono,
                'color': item.color,
                'datos': item.datos,
                'imagen': item.imagen
            });
        }
    })
    //console.log(datosSeccion);
    return (
        <Container fluid={true} style={{ margin: '0', padding: '0' }}>
            <Row>
                <Col sm={12} style={{ padding: '0', borderLeft: '12px solid red', minHeight: '100vh' }}>
                    {datosSeccion.map((seccion, index) => (
                        <div key={index}>
                            <h1 key={index} style={{
                                background: `${seccion.color}`,
                                color: '#fff',
                                padding: '13px'
                            }}>
                                <i className={`lni ${seccion.icono}`}></i> {seccion.nombre}
                            </h1>
                            <h2 style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #dedede', fontSize: '1.5rem' }}>{seccion.nombre}</h2>
                            <div style={{ display: 'flex', padding: '10px 20px' }}>
                                <div className="picture miab axel" style={{ minWidth: '100px' }}>
                                    <img src={`/images/${seccion.imagen}`} alt="Axel Laurent Obscura Sarzotti" title="Axel Laurent Obscura Sarzotti" />
                                </div>
                                <p className="p-0 m-2"><b>{seccion.datos}</b>.</p>
                            </div>

                        </div>
                    ))}
                </Col>
            </Row>

        </Container>

    )
};

export default Datos;