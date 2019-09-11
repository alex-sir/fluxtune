import React, { Component } from 'react';
import FluxTriangles from './FluxTriangles/FluxTriangles';
import ManipulationMultiplier from './ManipulationMultiplier/ManipulationMultiplier';
import './Flux.css';

export default class Flux extends Component {
    render() {
        return (
            <div className="flux">
                <FluxTriangles />
                <ManipulationMultiplier />
            </div>
        );
    }
}