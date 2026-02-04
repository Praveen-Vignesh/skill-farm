import {useState} from 'react';
import React from 'react';


const App = () => {
    const [count, setCount] = useState(0);
          //the variable 'count' is initialized to 0
          //the function 'setCount' is used to update the value of 'count'
    const [movies, setMovies] = useState(['Inception', 'Interstellar', 'The Dark Knight']);
    const [users, setUsers] = useState([{name: 'Alice', age: 30}, {name: 'Bob', age: 25}, {name: 'Charlie', age: 35}])

    const increment = () =>{
        setCount(count + 1)
//the setCount function is called with the new value of count (count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    const addMovies = () => {
        setMovies([...movies, "Bleach"])
    }
    const deleteMovies = () => {
        setMovies(movies.filter((m) => m !== "The Dark Knight"))
    }

    const updateUser = () => {
        setUsers(users.map((u) => u.name === 'Alice' ? {...u, age: 18} : u))
    }   

    return (
        <div>
            <div>
                {count}
            </div>
            <div>
                {movies.map((m) =>(
                    <span key={Math.random()}>{m}</span>
                ))}
            </div>
            <div>
                {users.map((u) => (
                    <span key={Math.random()}>
                        <span>Name: {u.name}</span>
                        <span>Age: {u.age}</span>
                    </span>
                ))}
            </div>




            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={addMovies}>Add movies</button>
            <button onClick={deleteMovies}>Delete Movie</button>
            <button onClick={updateUser}>update User</button>
        </div>
    )
}



export default App  