import React from 'react';
import Noticias from './Noticias';
import data from "../data/data";
import './Datos.css';

const profile = data.profile;

const Datos = () => {
    const detalles = [];
    profile.map(p => {
      detalles.push(p.summaryDetails)
    })
    console.log("Los detalles: " + detalles[0])
    return (
        <div>
            
            <div className="datos">
            {profile.map((p, index) => (
                <div key={index}>
                    <h2>{p.name}</h2>
                    <p className="p-0 m-0">{p.role}</p>
                    <h3>{p.email}</h3>
                    <p>{p.phone}</p>
                    <Noticias tag={'p'} speed={5} detalles={p.summaryDetails} />
                    <hr />
                    <h1>PROFESSIONAL SUMMARY</h1>
                    <hr />
                    <p>{p.summary}</p>
                    <Noticias tag={'h3'} speed={8} detalles={p.summaryDetails} />
                </div>
            ))}
            </div>
        </div>

    )
};

export default Datos;