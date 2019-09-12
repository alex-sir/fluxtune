import React, { Component } from 'react';
import Waveform from './Waveform/Waveform';
import PlayPauseAudio from './PlayPauseAudio/PlayPauseAudio';
import FileUpload from './FileUpload/FileUpload';
import './AudioPlayer.css';

export default class AudioPlayer extends Component {
    render() {
        const {
            isPlaying,
            wavesurfer,
            currentWave,
            setNewWave,
            setPlayPauseStatus,
            setAudioSource
        } = this.props;

        return (
            <div id="audio-player">
                <div>
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
                <div>
                    <FileUpload
                        setAudioSource={setAudioSource}
                    />
                </div>
            </div>
        );
    }
}