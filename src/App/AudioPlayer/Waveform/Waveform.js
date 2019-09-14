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
        wave.on('ready', setAudioDuration);
        wave.on('finish', playPauseAudioFinish);
    }

    render() {
        const { audioDuration, elapsedAudioTime } = this.props;
        // Audio duration
        const minutes = parseInt(audioDuration / 60);
        let seconds = parseInt(audioDuration % 60);
        seconds = seconds >= 10 ? seconds : `0${seconds}`;
        // Current time
        const currentMinutes = parseInt(elapsedAudioTime / 60);
        let currentSeconds = parseInt(elapsedAudioTime % 60);
        currentSeconds = currentSeconds >= 10 ? currentSeconds : `0${currentSeconds}`;

        return (
            <div className="waveform-container">
                <p>{`${currentMinutes}:${currentSeconds}`}</p>
                <div id="waveform"></div>
                <p>{`${minutes}:${seconds}`}</p>
            </div>
        );
    }
}