import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core';

const VolumeSlider = withStyles({
    root: {
        width: '100px',
        color: '#e8e8e8'
    },
    thumb: {
        '&:focus,&:hover': {
            boxShadow: '0px 0px 0px 8px rgba(232, 232, 232, 0.16)',
        }
    },
    valueLabel: {
        '& *': {
            paddingTop: '6.5px',
            paddingRight: '8px',
            background: 'transparent',
            color: '#e8e8e8',
        },
    }
})(Slider);

export default VolumeSlider;