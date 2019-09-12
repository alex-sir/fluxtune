import React, { Component } from 'react';
import RateSlider from './RateSlider/RateSlider';

export default class ControlPanel extends Component {
    render() {
        const { audioRate, setAudioRate, currentWave } = this.props;

        return (
            <RateSlider
                audioRate={audioRate}
                setAudioRate={setAudioRate}
                currentWave={currentWave}
            />
        );
    }
}