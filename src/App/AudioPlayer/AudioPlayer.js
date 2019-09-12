import React, { Component } from 'react';
import Waveform from './Waveform/Waveform';
import PlayPauseAudio from './PlayPauseAudio/PlayPauseAudio';
import './AudioPlayer.css';

export default class AudioPlayer extends Component {
    render() {
        const {
            isPlaying,
            wavesurfer,
            currentWave,
            setNewWave,
            setPlayPauseStatus
        } = this.props;

        return (
            <div id="audio-player">
                <PlayPauseAudio
                    isPlaying={isPlaying}
                    setPlayPauseStatus={setPlayPauseStatus}
                    currentWave={currentWave}
                />
                <Waveform
                    wavesurfer={wavesurfer}
                    setNewWave={setNewWave}
                />
            </div>
        );
    }
}