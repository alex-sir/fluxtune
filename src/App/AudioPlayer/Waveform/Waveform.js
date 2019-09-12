import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';
import MrSaxobeat from '../preset-music/mr-saxobeat.flac';
import './Waveform.css';

export default class Waveform extends Component {
    componentDidMount = () => {
        const { wavesurfer, setNewWave } = this.props;
        const {
            container,
            waveColor,
            progressColor,
            hideScrollbar,
            audioRate
        } = wavesurfer;

        const wave = WaveSurfer.create({
            container,
            waveColor,
            progressColor,
            hideScrollbar,
            audioRate
        });

        wave.load(MrSaxobeat);
        setNewWave(wave);
    }

    render() {
        return (
            <div id="waveform"></div>
        );
    }
}