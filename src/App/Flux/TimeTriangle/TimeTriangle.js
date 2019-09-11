import React from 'react';
import './TimeTriangle.css';

const TimeTriangle = () => {
    const height = 30;
    const width = 30;

    return (
        <svg width={width} height={height}>
            <polygon
                className="triangle"
                points={
                    `
                    1, 1
                    ${width - 1}, ${height / 2}
                    1, ${height - 1}
                    `
                }
            />
        </svg>
    );
}

export default TimeTriangle;