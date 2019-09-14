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
            currentAudioTime,
            wavesurfer,
            currentWave,
            setNewWave,
            setPlayPauseStatus,
            setAudioSource,
            setVolume,
            setAudioName,
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
                        currentAudioTime={currentAudioTime}
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
                        currentWave={currentWave}
                        setPlayPauseStatus={setPlayPauseStatus}
                        setAudioSource={setAudioSource}
                        setVolume={setVolume}
                        setAudioName={setAudioName}
                        muteVolumeChange={muteVolumeChange}
                        playPauseAudio={playPauseAudio}
                    />
                </div>
            </div>
        );
    }
}