import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to="/datos"><h1>Full Stack Developer</h1></Link>
            <h2>Axel Laurent Obscura Sarzotti</h2>
            <p>Coyoacán, México</p>
        </div>
    )
}

export default Home;