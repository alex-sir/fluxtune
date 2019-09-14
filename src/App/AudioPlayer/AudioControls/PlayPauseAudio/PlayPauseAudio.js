import React, { Component } from 'react';
import { MdPlayCircleOutline, MdPauseCircleOutline } from 'react-icons/md';
import './PlayPauseAudio.css';

export default class PlayPauseAudio extends Component {
    handleKeyPress = e => {
        const { playPauseAudio } = this.props;

        if (e.keyCode === 32) {
            playPauseAudio();
        }
    }

    componentDidMount = () => {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount = () => {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    render() {
        const { isPlaying, playPauseAudio } = this.props;
        let playPause;

        if (!isPlaying) {
            playPause = <MdPlayCircleOutline id="play-pause-music" onClick={playPauseAudio} />;
        } else {
            playPause = <MdPauseCircleOutline id="play-pause-music" onClick={playPauseAudio} />;
        }

        return (
            <div id="play-pause-container">
                {playPause}
            </div>
        );
    }
}