import React from 'react';
import InterestingCounter from './InterestingCounter';
import './index.css';

const App = () => {
    return (
        <div className='AppContainer'>
            <h1>Interesting Counter App</h1>
            <InterestingCounter />
        </div>
    )
}

export default App;