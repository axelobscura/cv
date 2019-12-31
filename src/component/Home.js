import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import CustomScroll from 'react-custom-scroll';
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
            height: '100vh',
            alignItems: 'center'
        },
        col: {
            
        },
        row: {
            
        },
        contenido: {
            width: '100%',
            height: '90vh',
            boxShadow: '0 0 20px #aa9425',
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
        <Container fluid={true} className="d-flex justify-content-between" style={styles.container}>
            <Row style={styles.col}>
                <Col style={styles.row}>
                    <div style={styles.contenido}>
                        <div className="picture">
                            <img src={profile} alt="Axel Laurent Obscura Sarzotti" title="Axel Laurent Obscura Sarzotti" />
                        </div>
                        <Link to="/datos"><h1>Full Stack Developer</h1></Link>
                        <h2>Axel Laurent Obscura Sarzotti</h2>
                        <p>Coyoacán, México</p>
                        <i className="lni-angle-double-right" onClick={accion}></i>
                        <Menu />
                    </div>
                </Col>
                <Col style={styles.row}>
                    <div style={styles.contenido}>
                        
                                <Switch>
                                <Route exact path="/">
                                    <Entrada />
                                </Route>
                                <Route exact path="/datos">
                                    <Datos />
                                </Route>
                                <Route exact path="/technical-full-stack">
                                <flexibleHeightElement style={{flex:1, minHeight: 0, minWidth: 0}}>
                                    <CustomScroll heightRelativeToParent="10%">
                                        <Technical />
                                    </CustomScroll>
                                </flexibleHeightElement>
                                </Route>
                                </Switch>
                            
                    </div>
                </Col>
            </Row>
            {/* 
            <div className='green-column' style={{background: `url(${imagen})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', filter: 'grayscale(100%)'}}>
                <div className="home">
                    <Link to="/datos"><h1>Full Stack Developer</h1></Link>
                    <h2>Axel Laurent Obscura Sarzotti</h2>
                    <p>Coyoacán, México</p>
                    <i className="lni-angle-double-right" onClick={accion}></i>
                </div>
            </div>
            */}
        </Container>
        
    )
}

export default Home;