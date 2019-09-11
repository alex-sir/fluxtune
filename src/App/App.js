import React, { Component } from 'react';
import Nav from './Nav/Nav';
import Flux from './Flux/Flux';
import AudioPlayer from './AudioPlayer/AudioPlayer';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Flux />
                <AudioPlayer />
            </div>
        );
    }
}