import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from "../data/data";
import './Entrada.css';

const profile = data.profile;

const Entrada = (props) => {
    const { datos } = props;
    console.log('Estos son los adtos: ' + datos.profile);
    let elNombre = profile.map(dato => dato.name);
    return (
        <Container fluid={true} style={{ margin: '0', padding: '0em' }}>
            <Row>
                <Col sm={6} style={{ padding: '0', borderLeft: '12px solid red', minHeight: '100vh' }}>
                    <h1><i className='lni lni-user'></i> PERSONAL INFO</h1>
                    <h4 className="p-0 m-2 titulo">
                        <i className="lni lni-user"></i> {elNombre}
                    </h4>
                    <h4 className="p-0 m-2 titulo"><i className="lni lni-pencil"></i> Full Stack Developer</h4>
                    <h4 className="p-0 m-2 titulo"><i className="lni lni-map"></i> México</h4>
                    <h4 className="p-0 m-2 titulo"><i className="lni lni-phone"></i> 5255 3220 6321</h4>
                    <h4 className="p-0 m-2 titulo"><i className="lni lni-envelope"></i> axosar@gmail.com</h4>
                </Col>
                <Col sm={6} style={{ padding: '0.3em' }}>
                    <h1>EXPERIENCE</h1>
                    <p className="p-0 m-2">Senior Full Stack Web Developer with 16 years of experience designing and developing backend architectures, decoupled and n-tier frontend web applications using HTML, CSS, JavaScript, JQuery, AJAX, JSON, XML, PHP, MySQL, NodeJS, Express, PostgressSQL, ReactJS, Angular, VueJS, NextJS.</p>
                </Col>
            </Row>

        </Container>

    )
};

export default Entrada;