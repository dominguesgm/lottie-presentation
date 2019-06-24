import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/react-lottie.json';
import CodeBlock from '../shared/block/CodeBlock';

const Block01 = () => {
    const title = 'Basic react-lottie';
    const body = (
        <p>
            Simple use case for Lottie, using react-lottie. <br />
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

    const lottie = (
        <Lottie options={ defaultOptions }
            height={ 400 }
            width={ 400 } />
    );

    return (
        <CodeBlock
            title={ title }
            body={ body }
            animation={ lottie } />
    );
};

export default Block01;