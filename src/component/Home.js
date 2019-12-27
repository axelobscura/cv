import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    //https://i.picsum.photos/id/327/400/400.jpg
    const [count, setCount] = useState(1);
    const [imagen, imagenCount] = useState("https://i.picsum.photos/id/327/1500/1500.jpg");
    const [data, setData] = useState({ hits: [] });
    useEffect(async () => {
        const result = await axios(
            'https://hn.algolia.com/api/v1/search?query=redux',
        );
        setData(result.data);
    }, []);
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
                <button onClick={accion}>
                    Click me
                </button>
            </div>
        </div>
        
    )
}

export default Home;