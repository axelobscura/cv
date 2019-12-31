import React from 'react';
import { Link } from "react-router-dom";
import './Menu.css';

const Menu = (props) => {
    return(
        <div className="menu">
            <ul>
                <li><Link to="/"><i className="material-icons">change_history</i></Link></li>
                <li><Link to="/datos"><i className="material-icons">eco</i></Link></li>
                <li><Link to="/technical-full-stack"><i className="material-icons">donut_large</i></Link></li>
                <li><Link to="/datos"><i className="material-icons">explore</i></Link></li>
                <li><Link to="/datos"><i className="material-icons">fingerprint</i></Link></li>
            </ul>
            
        </div>
    )
}

export default Menu;