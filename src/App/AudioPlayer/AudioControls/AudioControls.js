import React, { Component } from 'react';
import PlayPauseAudio from './PlayPauseAudio/PlayPauseAudio';
import FileUpload from './FileUpload/FileUpload';
import Volume from './Volume/Volume';
import './AudioControls.css';

export default class AudioControls extends Component {
    render() {
        const {
            isPlaying,
            volume,
            isMuted,
            currentWave,
            setPlayPauseStatus,
            setAudioSource,
            setVolume,
            setAudioName,
            muteVolumeChange
        } = this.props;

        return (
            <div id="audio-controls">
                <FileUpload
                    setAudioSource={setAudioSource}
                    setAudioName={setAudioName}
                />
                <PlayPauseAudio
                    isPlaying={isPlaying}
                    setPlayPauseStatus={setPlayPauseStatus}
                    currentWave={currentWave}
                />
                <Volume
                    volume={volume}
                    isMuted={isMuted}
                    setVolume={setVolume}
                    muteVolumeChange={muteVolumeChange}
                />
            </div>
        );
    }
}