import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';
import MrSaxobeat from '../preset-music/mr-saxobeat.flac';
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import './Waveform.css';

export default class Waveform extends Component {
    componentDidMount = () => {
        const {
            wavesurfer,
            setNewWave,
            getCurrentAudioTime,
            getAudioDuration,
            setAudioDuration,
            playPauseAudioFinish
        } = this.props;
        const {
            container,
            minPxPerSec,
            scrollParent,
            waveColor,
            progressColor,
            cursorColor,
            audioRate,
            responsive
        } = wavesurfer;

        const wave = WaveSurfer.create({
            container,
            minPxPerSec,
            scrollParent,
            waveColor,
            progressColor,
            cursorColor,
            audioRate,
            responsive
        });

        wave.load(MrSaxobeat);
        setNewWave(wave);
        wave.on('finish', playPauseAudioFinish);
        wave.on('ready', setAudioDuration);

        setInterval(() => {
            getCurrentAudioTime();
        }, 1000);
    }

    render() {
        const { audioDuration, currentAudioTime } = this.props;

        return (
            <div className="waveform-container">
                <p>{audioDuration}</p>
                <div id="waveform"></div>
            </div>
        );
    }
}