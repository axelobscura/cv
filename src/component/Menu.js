import React from 'react';
import { Link } from "react-router-dom";
import './Menu.css';

const Menu = (props) => {
    return(
        <div className="menu">
            <ul>
                <li><Link to="/"><i class="material-icons">face</i></Link></li>
                <li><Link to="/datos"><i class="material-icons">face</i></Link></li>
                <li><i class="material-icons">face</i></li>
                <li><i class="material-icons">face</i></li>
                <li><i class="material-icons">face</i></li>
            </ul>
            
        </div>
    )
}

export default Menu;