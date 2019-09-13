import React, { Component } from 'react';
import { MdPlayCircleOutline, MdPauseCircleOutline } from 'react-icons/md';
import './PlayPauseAudio.css';

export default class PlayPauseAudio extends Component {
    playPause = e => {
        const { setPlayPauseStatus, currentWave } = this.props;

        setPlayPauseStatus();
        currentWave.playPause();
    }

    render() {
        const { isPlaying } = this.props;
        let playPause;

        if (!isPlaying) {
            playPause = <MdPlayCircleOutline id="play-pause-music" onClick={this.playPause} />;
        } else {
            playPause = <MdPauseCircleOutline id="play-pause-music" onClick={this.playPause} />;
        }

        return (
            <div id="play-pause-container">
                {playPause}
            </div>
        );
    }
}