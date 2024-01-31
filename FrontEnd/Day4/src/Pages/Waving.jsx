import React from 'react';
import './Waving.css'; 

const WaviyText = () => {
    const text = "FESTIVEASE!!!";
    const textArray = text.split('');

    return (
        <div className="waviy">
            {textArray.map((char, index) => (
                <span key={index} style={{ '--i': index + 1 }}>
                    {char}
                </span>
            ))}
        </div>
    );
};

export default WaviyText;
