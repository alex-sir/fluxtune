import React, { Component } from 'react';
import Waveform from './Waveform/Waveform';
import AudioControls from './AudioControls/AudioControls';
import './AudioPlayer.css';

export default class AudioPlayer extends Component {
    render() {
        const {
            isPlaying,
            volume,
            isMuted,
            audioName,
            wavesurfer,
            currentWave,
            setNewWave,
            setPlayPauseStatus,
            setAudioSource,
            setVolume,
            setAudioName,
            muteVolumeChange
        } = this.props;

        return (
            <div id="audio-player">
                <div>
                    <p>{audioName}</p>
                </div>
                <div>
                    <Waveform
                        wavesurfer={wavesurfer}
                        setNewWave={setNewWave}
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
                    />
                </div>
            </div>
        );
    }
}