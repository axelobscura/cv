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
    props.detalles.map(p => {
        quotes.push(p);
    })
    return (
        <div>
            <Ticker
                offset="2%"
                move={true}
                speed={props.speed}
                mode='smooth'
            >
                {(index) => (
                    <props.tag style={{ whiteSpace: "nowrap", margin: '0', padding: '0' }}> <i className="lni-chevron-right" style={{ marginLeft: '3px', color: 'red' }}></i> {quotes[rand(0, quotes.length - 1)]} </props.tag>
                )}
            </Ticker>
        </div>
    )
};

export default Noticias;