import React, { Component } from 'react';
import { MdPlayCircleOutline, MdPauseCircleOutline } from 'react-icons/md';
import './PlayPauseAudio.css';

export default class PlayPauseAudio extends Component {
    handlePlayPauseAudio = () => {
        const {
            isPlaying,
            playPauseAudio,
            getCurrentAudioTime,
            setCurrentAudioTime
        } = this.props;
        let audioTime;

        playPauseAudio();

        // FIXME: Interacting w/ waveform when play/pause has never been pressed doesn't update elapsed time
        if (!isPlaying) {
            audioTime = setInterval(() => {
                const currentTime = getCurrentAudioTime();
                setCurrentAudioTime(currentTime);
                // TODO: Works, can improve performance by updating ms to as long as possible
            }, 10);
        } else {
            clearInterval(audioTime);
        }
    }

    handleKeyPress = e => {
        if (e.keyCode === 32) {
            this.handlePlayPauseAudio();
        }
    }

    componentDidMount = () => {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount = () => {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    render() {
        const { isPlaying } = this.props;
        let playPause;

        if (!isPlaying) {
            playPause = <MdPlayCircleOutline id="play-pause-music" onClick={this.handlePlayPauseAudio} />;
        } else {
            playPause = <MdPauseCircleOutline id="play-pause-music" onClick={this.handlePlayPauseAudio} />;
        }

        return (
            <div id="play-pause-container">
                {playPause}
            </div>
        );
    }
}