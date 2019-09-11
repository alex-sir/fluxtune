import React, { Component } from 'react';
import TimeTriangle from './TimeTriangle/TimeTriangle';
import './Flux.css';

export default class Flux extends Component {
    render() {
        return (
            <div className="time-flux">
                <TimeTriangle />
                <TimeTriangle />
                <TimeTriangle />
                <TimeTriangle />
                <TimeTriangle />
                <TimeTriangle />
                <TimeTriangle />
                <TimeTriangle />
                <TimeTriangle />
                <TimeTriangle />
            </div>
        );
    }
}