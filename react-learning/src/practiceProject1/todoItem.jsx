import React, { useState } from 'react';

const TodoItem = (props) => {
    return (
        <div className="todoItem">
            {props.item}
        </div>
    );
};

const TodoApp = () => {
    const [todolist, setTodolist] = useState([]);
    const [inputValue, setInputValue] = useState(""); 

    const submit = () => {
        if (!inputValue) return;

        setTodolist([...todolist, inputValue]);

        setInputValue(""); 
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder='Enter todo item' 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <button onClick={submit}>Add Todo</button>

            <div className='todoContainer'>
                {todolist.map((item, index) => (
                    <TodoItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default TodoApp; // Export the main component