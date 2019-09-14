import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core';

const RateRangeSlider = withStyles({
    root: {
        width: '100px',
        color: '#e8e8e8'
    },
    thumb: {
        '&:focus,&:hover': {
            boxShadow: '0px 0px 0px 8px rgba(232, 232, 232, 0.16)',
        }
    }
})(Slider);

export default RateRangeSlider;