import React from 'react';
import data from "../data/data";
import './Entrada.css';

const profile = data.profile;

const Entrada = () => {
    return (
        <div>
            <div className="entrada">
                <h1>PROFILE</h1>
                <hr />
                <p className="p-0 m-2"><i class="lni-emoji-cool"></i> Name: Axel Laurent Obscura Sarzotti</p>
                <p className="p-0 m-2"><i class="lni-target"></i> Role: Full Stack Developer</p>
                <p className="p-0 m-2"><i class="lni-target"></i> Address: México</p>
                <p className="p-0 m-2"><i class="lni-target"></i> Phone: 55 3220 6321</p>
                <p className="p-0 m-2"><i class="lni-target"></i> Email: axosar@gmail.com</p>
                <hr />
                <h1>OBJECTIVE</h1>
                <hr />
                <p className="p-0 m-2">Senior Full Stack Web Developer with 15 years of experience designing and developing backend architectures, decoupled and n-tier frontend web applications using HTML, CSS, JavaScript, JQuery, AJAX, JSON, XML, PHP, MySQL, NodeJS, Express, PostgressSQL, ReactJS, Angular, VueJS, NextJS.</p>
                <hr />
            </div>
        </div>

    )
};

export default Entrada;