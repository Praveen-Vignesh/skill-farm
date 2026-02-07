import React, { useEffect } from 'react'

const Component1 = ({userID, count, setCount, users}) => {  // ✓ Capitalized
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1)  // ✓ Use callback form
        }, 1000)

        return () => {
            clearInterval(interval)
            setCount(0)
        }
    }, [userID])  // ✓ Add dependency array

    return (
        <div>
            <h1>{users[userID]}</h1>
        </div>
    )
}

export default Component1  // ✓ Capitalized