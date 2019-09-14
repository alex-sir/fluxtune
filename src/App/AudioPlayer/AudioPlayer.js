import React, { Component } from 'react';
import Waveform from './Waveform/Waveform';
import AudioControls from './AudioControls/AudioControls';
import './AudioPlayer.css';

export default class AudioPlayer extends Component {
    playPauseAudio = () => {
        const { setPlayPauseStatus, currentWave } = this.props;

        setPlayPauseStatus();
        currentWave.playPause();
    }

    playPauseAudioFinish = () => {
        const { setPlayPauseStatus } = this.props;

        setPlayPauseStatus();
    }

    render() {
        const {
            isPlaying,
            volume,
            isMuted,
            audioName,
            audioDuration,
            elapsedAudioTime,
            wavesurfer,
            currentWave,
            setNewWave,
            setPlayPauseStatus,
            setAudioSource,
            setVolume,
            setAudioName,
            setCurrentAudioTime,
            getCurrentAudioTime,
            getAudioDuration,
            setAudioDuration,
            muteVolumeChange
        } = this.props;
        const { playPauseAudio, playPauseAudioFinish } = this;

        return (
            <div id="audio-player">
                <div>
                    <p>{audioName}</p>
                </div>
                <div>
                    <Waveform
                        wavesurfer={wavesurfer}
                        currentWave={currentWave}
                        setNewWave={setNewWave}
                        audioDuration={audioDuration}
                        elapsedAudioTime={elapsedAudioTime}
                        getCurrentAudioTime={getCurrentAudioTime}
                        getAudioDuration={getAudioDuration}
                        setAudioDuration={setAudioDuration}
                        setPlayPauseStatus={setPlayPauseStatus}
                        playPauseAudioFinish={playPauseAudioFinish}
                    />
                </div>
                <div id="wave-options">
                    <AudioControls
                        isPlaying={isPlaying}
                        volume={volume}
                        isMuted={isMuted}
                        getCurrentAudioTime={getCurrentAudioTime}
                        currentWave={currentWave}
                        setPlayPauseStatus={setPlayPauseStatus}
                        setAudioSource={setAudioSource}
                        setVolume={setVolume}
                        setAudioName={setAudioName}
                        setCurrentAudioTime={setCurrentAudioTime}
                        muteVolumeChange={muteVolumeChange}
                        playPauseAudio={playPauseAudio}
                    />
                </div>
            </div>
        );
    }
}