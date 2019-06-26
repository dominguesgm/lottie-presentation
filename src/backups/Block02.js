import React, { Component } from 'react';
import Lottie from 'lottie-react-web';
import animationData from '../assets/continuous.json';
import CodeBlock from '../shared/block/CodeBlock';

class Block02 extends Component {
    state = {
        pause: false,
        stop: false,
        direction: 1,
    }

    render() {
        const { pause, stop, direction } = this.state;
        
        const title = 'lottie-react-web';
    
        const body = (
            <p>
            Create animations using <a href="https://github.com/felippenardi/lottie-react-web/">lottie-react-web</a>.<br/>
            This wrappeer is a fork of react-lottie and extends its original features. It additionally accepts props for 
            the reproduction speed, duration and allows specifying reproduction segments.
            </p>
        );
    
        const defaultOptions = {
            loop: false,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRation: 'xMidyMid slice',
            },
        };
    
        const lottie = (
            <div
                onClick={ this.handleClick }
                onMouseEnter={ this.handleMouseEnter }
                onMouseLeave={ this.handleMouseLeave }>
                <Lottie options={ defaultOptions }
                    height={ 400 }
                    width={ 400 }
                    speed={ 1 }
                    isPaused={ pause }
                    isStopped={ stop }
                    direction={ direction }
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
        const { pause } = this.state;
        
        this.setState({ pause: !pause });
    }

    handleMouseEnter = () => {
        console.log('Forwards');
        this.setState({ direction: 1, stop: false });
    }

    handleMouseLeave = () => {
        console.log('Backwards');
        this.setState({ direction: -1, pause: false});
    }
}

export default Block02;