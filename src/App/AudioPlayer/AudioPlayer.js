import React, { Component } from 'react';
import Waveform from './Waveform/Waveform';
import PlayPauseAudio from './PlayPauseAudio/PlayPauseAudio';
import './AudioPlayer.css';

export default class AudioPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            wavesurfer: {
                container: '#waveform',
                waveColor: 'violet',
                progressColor: 'purple',
                hideScrollbar: true
            },
            currentWave: null
        };
    }

    setNewWave = wave => {
        this.setState({
            currentWave: wave
        });
    }

    setPlayPauseStatus = () => {
        this.setState({
            isPlaying: !this.state.isPlaying
        });
    }

    render() {
        const { isPlaying, wavesurfer, currentWave } = this.state;

        return (
            <div id="audio-player">
                <PlayPauseAudio
                    isPlaying={isPlaying}
                    setPlayPauseStatus={this.setPlayPauseStatus}
                    currentWave={currentWave}
                />
                <Waveform
                    wavesurfer={wavesurfer}
                    setNewWave={this.setNewWave}
                />
            </div>
        );
    }
}