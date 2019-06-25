import React, { Component } from 'react';
import LottieControlled from '../shared/lottie-controlled/LottieControlled';
import animationData from '../assets/continuous.json';
import CodeBlock from '../shared/block/CodeBlock';

class Block03 extends Component {
    animationRef = React.createRef();

    state = {
    	position: 0,
    }

    componentDidMount() {
    	window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
    	window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
    	const { position } = this.state;
        
    	const title = 'Lottie animation control';
    
    	const body = (
    		<p>
            Some of the original features of the Lottie Web library haven't been included in the mentioned wrappers.<br/>
            One of these features is the goToAndStop() method. In this repository there is a component (LottieControlled) which extends lottie-react-web with this functionality.
            Another missing method is goToAndPlay(), but until this is included in one of the wrappers, its effect can be achieved using an extention like this.
    		</p>
    	);
    
    	const defaultOptions = {
    		loop: false,
    		autoplay: false,
    		animationData: animationData,
    		rendererSettings: {
    			preserveAspectRation: 'xMidyMid slice',
    		},
    	};
    
    	const lottie = (
    		<div ref={ this.animationRef }
    			onClick={ this.handleClick }>
    			<LottieControlled
    				options={ defaultOptions }
    				height={ 400 }
    				width={ 400 }
    				speed={ 1 }
    				percentage={ position }
    			/>
    		</div>
    	);
    
    	return (
    		<CodeBlock
    			title={ title }
    			body={ body }
    			animation={ lottie } />
    	);
    }

    handleClick = () => {
    	const { position } = this.state;
    	position <= 1 && this.setState({ position: position+0.01});
    }

    handleScroll = () => {
    	const { position } = this.state;
    	const scrollTop = document.scrollingElement.scrollTop;
    	const elementPageOffset = this.animationRef.current.offsetTop;
    	const elementHeight = this.animationRef.current.clientHeight;
    	const windowHeight = window.innerHeight;
        
    	const extraOffset = 250;
        
    	const unbountPercentage = (scrollTop+windowHeight-extraOffset-elementPageOffset) / elementHeight;
    	const percentage = Math.min(Math.max(0, unbountPercentage*0.75), 1);
        
    	position !== percentage && this.setState({ position: percentage});
    }
}

export default Block03;