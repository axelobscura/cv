import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    //https://i.picsum.photos/id/327/400/400.jpg
    const [count, setCount] = useState(1);
    const [data, setData] = useState({ hits: [] });
    useEffect(async () => {
        const result = await axios(
          'https://i.picsum.photos/id/327/400/400.jpg',
        );
        setData(result.data);
      }, []);
    
    return (
        <div className="home">
            <Link to="/datos"><h1>Full Stack Developer</h1></Link>
            <h2>Axel Laurent Obscura Sarzotti</h2>
            <p>Coyoacán, México</p>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount((Math.floor(Math.random() * 1000)))}>
                Click me
            </button>
            <ul>
            {data.hits.map(item => (
                <li key={item.objectID}>
                    <a href={item.url}>{item.title}</a>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Home;