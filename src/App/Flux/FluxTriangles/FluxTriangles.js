import React from 'react';
import TimeTriangle from '../TimeTriangle/TimeTriangle';
import './FluxTriangles.css';

const FluxTriangles = () => {
    const timeFluxTriangles = [...Array(10)].map((e, idx) => (
        <TimeTriangle key={idx + 1} />
    ));

    return (
        <div className="time-flux">
            {timeFluxTriangles}
        </div>
    );
}

export default FluxTriangles;