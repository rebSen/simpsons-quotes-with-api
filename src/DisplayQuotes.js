import React from 'react';
import './DisplayQuotes.css';

const DisplayQuotes = ({quotee}) => {
    return (
        <div  className="Display">
            <img src={quotee.image} alt="ici"/>
            <ul>
                <li className="quoty">"{quotee.quote}"</li>
                <li>{quotee.character} </li>
            </ul>
        </div>
    );
};

export default DisplayQuotes;