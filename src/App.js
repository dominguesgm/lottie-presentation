import React from 'react';
import Block01 from './blocks/Block01';
import Block02 from './blocks/Block02';
import Block03 from './blocks/Block03';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>
        Some usage examples of AirBnB's Lottie library
            </h1>
            <Block01 />
            <Block02 />
            <Block03 />
        </div>
    );
}

export default App;
