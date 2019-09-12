import React, { Component } from 'react';
import Waveform from './Waveform/Waveform';
import PlayPauseAudio from './PlayPauseAudio/PlayPauseAudio';
import FileUpload from './FileUpload/FileUpload';
import Volume from './Volume/Volume';
import './AudioPlayer.css';

export default class AudioPlayer extends Component {
    render() {
        const {
            isPlaying,
            volume,
            wavesurfer,
            currentWave,
            setNewWave,
            setPlayPauseStatus,
            setAudioSource,
            setVolume
        } = this.props;

        return (
            <div id="audio-player">
                <div>
                    <Waveform
                        wavesurfer={wavesurfer}
                        setNewWave={setNewWave}
                    />
                </div>
                <div id="wave-options">
                    <PlayPauseAudio
                        isPlaying={isPlaying}
                        setPlayPauseStatus={setPlayPauseStatus}
                        currentWave={currentWave}
                    />
                    <FileUpload
                        setAudioSource={setAudioSource}
                    />
                    <Volume
                        volume={volume}
                        setVolume={setVolume}
                    />
                </div>
            </div>
        );
    }
}