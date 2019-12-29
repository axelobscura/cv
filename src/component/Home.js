import React, { useState } from 'react';

import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    const [count, setCount] = useState(Math.floor(Math.random() * 1000));
    const [imagen, imagenCount] = useState(`https://i.picsum.photos/id/${count}/1500/1500.jpg`);
    const accion = () => {
        setCount((Math.floor(Math.random() * 1000)));
        imagenCount(`https://i.picsum.photos/id/${count}/1500/1500.jpg`);
    }
    return (
        <div className='green-column' style={{background: `url(${imagen})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', filter: 'grayscale(100%)'}}>
            <div className="home">
                <Link to="/datos"><h1>Full Stack Developer</h1></Link>
                <h2>Axel Laurent Obscura Sarzotti</h2>
                <p>Coyoacán, México</p>
                <i className="lni-angle-double-right" onClick={accion}></i>
            </div>
        </div>
        
    )
}

export default Home;