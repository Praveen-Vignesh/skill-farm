import React from 'react'

const UserList = () => {
    const users = [
        {id:1, name:"Praveen", age:"22"},
        {id:2, name:"Clonus", age:"16"},
        {id:3, name: "Wither", age:"16"}
    ]

  return (
    <ul>
        {users.map(({id, name, age}) => (
            <div key={id}>
                <li>Name: {name}</li>
                <li>age: {age}</li>
                <br></br>
                <br></br>
            </div>
            )   
        )
        }
    </ul>
  )
}

export default UserList