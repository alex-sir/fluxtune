import React, { Component } from 'react';
import { MdPlayCircleOutline, MdPauseCircleOutline } from 'react-icons/md';
import './PlayPauseAudio.css';

export default class PlayPauseAudio extends Component {
    playPause = e => {
        const { isPlaying, setPlayPauseStatus, currentWave } = this.props;
        const playPauseBtn = e.target;

        setPlayPauseStatus();
        playPauseBtn.textContent = (isPlaying ? 'Play' : 'Pause');
        currentWave.playPause();
    }

    render() {
        const { isPlaying } = this.props;
        let playPause;

        if (!isPlaying) {
            playPause = <MdPlayCircleOutline id="play-music" onClick={this.playPause} />;
        } else {
            playPause = <MdPauseCircleOutline id="play-music" onClick={this.playPause} />;
        }

        return (
            <div>
                {playPause}
            </div>
        );
    }
}