import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/react-lottie.json';
import CodeBlock from '../shared/block/CodeBlock';

class Block01 extends Component {
    render() {
        const title = 'react-lottie';
        const body = (
            <p>
                Create animations using <a href="https://github.com/chenqingspring/react-lottie/">react-lottie</a>. <br />
                This wrapper provides control over the pause/stop state of an animation, autoplay, loop,
                and accepts event listeners for animation end, loop end and frame entry.
                Notice that the default behavior of react-lottie is to pause when clicked.
            </p>
        );

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRation: 'xMidyMid slice',
            },
        };
        
        const eventListeners = [
            // {
            // 	eventName: 'complete',
            // 	callback: this.handleComplete,
            // },
            // {
            // 	eventName: 'loopComplete',
            // 	callback: this.handleLoopComplete,
            // },
            // {
            // 	eventName: 'enterFrame',
            // 	callback: this.handleEnterFrame,
            // },
        ];

        const lottie = (
            <Lottie options={ defaultOptions }
                height={ 400 }
                width={ 400 } 
                eventListeners={ eventListeners }
            />
        );

        return (
            <CodeBlock
                title={ title }
                body={ body }
                animation={ lottie } />
        );
    }
    
    handleComplete = (data) => {
        console.log('Animation has completed');
        console.log('Complete data', data);
    }

    handleLoopComplete = (data) => {
        console.log('Loop has completed');
        console.log('Loop Complete data', data);
    }

    handleEnterFrame = (data) => {
        console.log('Entered frame');
        console.log('Enter frame data', data);
    }
}

export default Block01;