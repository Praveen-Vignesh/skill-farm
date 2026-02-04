import React from 'react';
import InterestingCounter from './InterestingCounter';
import TodoApp from './todoItem';
import './index.css';

const App = () => {
    return (
        <div className='AppContainer'>
            <h1>Interesting Counter App</h1>
            <InterestingCounter />
            <h1>Todo List App</h1>
            <TodoApp />
        </div>
    )
}

export default App;