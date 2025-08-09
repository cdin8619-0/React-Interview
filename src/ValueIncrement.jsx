import React, { useState } from 'react';
import './style.css';

const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1);
    }

    return (
        <div>
            <button onClick = {increment}>
                Click me!
            </button>
            <h1>count = {count} </h1>
        </div>
    )
};

export default App;