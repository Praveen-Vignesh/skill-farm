import React, { useState } from 'react'
import Component1 from './component1'  // ✓ Capitalized

const users = {1: 'John', 2: 'Jane', 3: 'Doe'}

const App = () => {
    const [userId, setUserID] = useState(1)
    const [count, setCount] = useState(0)  // ✓ Inside component
    
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setUserID(userId === 3 ? 1 : userId + 1)}>
                Change User
            </button>
            <Component1 
                userID={userId} 
                count={count} 
                setCount={setCount}
                users={users}
            />  {/* ✓ Capitalized and passing props */}
        </div>
    )
}

export default App