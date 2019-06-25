// https://github.com/chenqingspring/react-lottie/issues/40
import Lottie from 'lottie-react-web';
import PropTypes from 'prop-types';

export default class LottieControlled extends Lottie {
    static propTypes = {
    	...Lottie.propTypes,
    	percentage: PropTypes.number,
    }
  
    componentDidUpdate(prevProps, prevState, prevContext) {
    	if (super.componentDidUpdate) {
    		super.componentDidUpdate(prevProps, prevState, prevContext);
    	}
  
    	if (this.props.percentage !== prevProps.percentage && this.anim.totalFrames) {
    		const frame = Math.round(this.anim.totalFrames * this.props.percentage);
    		this.anim.goToAndStop(frame, true);
    	}
    }
}