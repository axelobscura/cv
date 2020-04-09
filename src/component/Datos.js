import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Noticias from './Noticias';
import data from "../data/data";
import './Datos.css';
const profile = data.profile;
const Datos = () => {
    const detalles = [];
    {/* 
    profile.map(p => {
        detalles.push(p.summaryDetails)
    })
    */}
    return (
        <Container fluid={true} style={{ margin: '0', padding: '0' }}>
            <Row>
                <Col sm={12} style={{ padding: '0.3em' }}>
                    <h1><i className='lni lni-home'></i> DATOS</h1>
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