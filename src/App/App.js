import React, { Component } from 'react';
import Nav from './Nav/Nav';
import Flux from './Flux/Flux';
import AudioPlayer from './AudioPlayer/AudioPlayer';
import ControlPanel from './ControlPanel/ControlPanel';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            wavesurfer: {
                container: '#waveform',
                waveColor: 'violet',
                progressColor: 'purple',
                hideScrollbar: true,
                audioRate: 1,
                mediaControls: true
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

    setAudioRate = audioRate => {
        const { wavesurfer, currentWave } = this.state;
        wavesurfer.audioRate = parseFloat(audioRate);
        currentWave.setPlaybackRate(parseFloat(audioRate));

        this.setState({
            wavesurfer,
            currentWave
        });
    }

    setAudioSource = file => {
        const { currentWave } = this.state;

        currentWave.load(file);
    }

    render() {
        const { isPlaying, wavesurfer, currentWave } = this.state;
        const { setNewWave, setPlayPauseStatus, setAudioRate, setAudioSource } = this;
        const { audioRate } = wavesurfer;

        return (
            <div>
                <Nav />
                <Flux />
                <ControlPanel
                    audioRate={audioRate}
                    setAudioRate={setAudioRate}
                    currentWave={currentWave}
                />
                <AudioPlayer
                    isPlaying={isPlaying}
                    wavesurfer={wavesurfer}
                    currentWave={currentWave}
                    setNewWave={setNewWave}
                    setPlayPauseStatus={setPlayPauseStatus}
                    setAudioSource={setAudioSource}
                />
            </div>
        );
    }
}