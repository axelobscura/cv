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
                speed={props.speed}
                mode='smooth'
                >
                {(index) => (
                    <props.tag style={{ whiteSpace: "nowrap", margin: '0', padding: '0' }}> <i className="lni-chevron-right" style={{marginLeft: '10px', color: 'red'}}></i> {quotes[rand(0, quotes.length - 1)]} </props.tag>
                )}
            </Ticker>
        </div>

    )
};

export default Noticias;