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
            getCurrentAudioTime,
            currentWave,
            setPlayPauseStatus,
            setAudioSource,
            setVolume,
            setAudioName,
            setCurrentAudioTime,
            muteVolumeChange,
            playPauseAudio
        } = this.props;

        return (
            <div id="audio-controls">
                <FileUpload
                    isPlaying={isPlaying}
                    setPlayPauseStatus={setPlayPauseStatus}
                    setAudioSource={setAudioSource}
                    setAudioName={setAudioName}
                />
                <PlayPauseAudio
                    isPlaying={isPlaying}
                    getCurrentAudioTime={getCurrentAudioTime}
                    setPlayPauseStatus={setPlayPauseStatus}
                    setCurrentAudioTime={setCurrentAudioTime}
                    currentWave={currentWave}
                    playPauseAudio={playPauseAudio}
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