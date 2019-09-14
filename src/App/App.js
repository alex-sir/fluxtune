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
            volume: 1,
            isMuted: false,
            audioName: '',
            audioDuration: 0,
            elapsedAudioTime: 0,
            wavesurfer: {
                container: '#waveform',
                minPxPerSec: 120,
                scrollParent: true,
                waveColor: 'violet',
                progressColor: 'purple',
                cursorColor: '#e8e8e8',
                audioRate: 1,
                responsive: true
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

    setVolume = newVolume => {
        const { currentWave } = this.state;
        newVolume = parseFloat(newVolume);

        currentWave.setVolume(newVolume);
        this.setState({
            volume: newVolume
        });
    }

    setAudioName = fileName => {
        this.setState({
            audioName: fileName
        });
    }

    getCurrentAudioTime = () => {
        const { currentWave } = this.state;

        return currentWave.getCurrentTime();
    }

    setCurrentAudioTime = currentTime => {
        this.setState({
            elapsedAudioTime: parseInt(currentTime)
        });
    }

    getAudioDuration = () => {
        const { currentWave } = this.state;

        console.log(`Duration: ${currentWave.getDuration()}`);
    }

    setAudioDuration = () => {
        const { currentWave } = this.state;

        this.setState({
            audioDuration: parseInt(currentWave.getDuration())
        });
    }

    muteVolumeChange = () => {
        const { currentWave } = this.state;

        currentWave.toggleMute();
        this.setState({
            isMuted: !this.state.isMuted
        });
    }

    render() {
        const {
            isPlaying,
            volume,
            isMuted,
            wavesurfer,
            currentWave,
            audioName,
            audioDuration,
            elapsedAudioTime
        } = this.state;
        const {
            setNewWave,
            setPlayPauseStatus,
            setAudioRate,
            setAudioSource,
            setVolume,
            setAudioName,
            setCurrentAudioTime,
            getCurrentAudioTime,
            getAudioDuration,
            setAudioDuration,
            muteVolumeChange
        } = this;
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
                    volume={volume}
                    isMuted={isMuted}
                    audioName={audioName}
                    audioDuration={audioDuration}
                    elapsedAudioTime={elapsedAudioTime}
                    wavesurfer={wavesurfer}
                    currentWave={currentWave}
                    setNewWave={setNewWave}
                    setPlayPauseStatus={setPlayPauseStatus}
                    setAudioSource={setAudioSource}
                    setVolume={setVolume}
                    setAudioName={setAudioName}
                    setCurrentAudioTime={setCurrentAudioTime}
                    getCurrentAudioTime={getCurrentAudioTime}
                    getAudioDuration={getAudioDuration}
                    setAudioDuration={setAudioDuration}
                    muteVolumeChange={muteVolumeChange}
                />
            </div>
        );
    }
}