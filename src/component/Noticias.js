import React from 'react';
import Ticker from 'react-ticker';

function rand(min, max) {
    var offset = min
    var range = (max - min) + 1
    var randomNumber = Math.floor(Math.random() * range) + offset
    return randomNumber
  }
  
  const quotes = []

const Noticias = (props) => {
    console.log("detalles: " + props.detalles);

    props.detalles.map(p => {
        quotes.push(p);
        console.log("elpush: " + p);
    })
    return (
        <div>
            <Ticker
                offset="10%"
                move={true}
                >
                {(index) => (
                    <h3>{quotes[rand(0, quotes.length - 1)]}</h3>
                )}
            </Ticker>
        </div>

    )
};

export default Noticias;