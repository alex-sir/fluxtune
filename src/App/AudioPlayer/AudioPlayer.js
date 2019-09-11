import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';
import MrSaxobeat from './preset-music/mr-saxobeat.flac';

export default class AudioPlayer extends Component {
    componentDidMount = () => {
        const wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'violet',
            progressColor: 'purple'
        });

        wavesurfer.load(MrSaxobeat);

        document.querySelector('#playMusic').addEventListener('click', e => {
            if (wavesurfer.isPlaying()) {
                wavesurfer.pause();
                e.target.textContent = 'Play';
            } else {
                wavesurfer.play();
                e.target.textContent = 'Pause';
            }
        });
    }

    render() {
        return (
            <div>
                <button id="playMusic">Play</button>
                <div id="waveform"></div>
            </div>
        );
    }
}