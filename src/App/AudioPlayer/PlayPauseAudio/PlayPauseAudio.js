import React, { Component } from 'react';

export default class PlayPauseAudio extends Component {
    playPause = e => {
        const { isPlaying, setPlayPauseStatus, currentWave } = this.props;
        const playPauseBtn = e.target;

        setPlayPauseStatus();
        playPauseBtn.textContent = isPlaying ? 'Play' : 'Pause';
        currentWave.playPause();
    }

    render() {
        return (
            <button id="play-music" onClick={this.playPause}>Play</button>
        );
    }
}