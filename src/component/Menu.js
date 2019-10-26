import React from 'react';
import { Link } from "react-router-dom";
import './Menu.css';

const Menu = (props) => {
    return(
        <div className="menu">
            <ul>
                <li><Link to="/"><i class="material-icons">change_history</i></Link></li>
                <li><Link to="/datos"><i class="material-icons">eco</i></Link></li>
                <li><Link to="/datos"><i class="material-icons">donut_large</i></Link></li>
                <li><Link to="/datos"><i class="material-icons">explore</i></Link></li>
                <li><Link to="/datos"><i class="material-icons">fingerprint</i></Link></li>
            </ul>
            
        </div>
    )
}

export default Menu;