import React from 'react'
import ProfileCard from './profileCard'



const liveUpdate = () => {
    const [name, setName] = React.useState("Praveen")
    const [role, setRole] = React.useState("Software Engineer")
    const [description, setDescription] = React.useState("Passionate about coding and problem-solving. Always eager to learn new technologies and improve my skills.")
  return (
    <div>
        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='Role' value={role} onChange={(e) => setRole(e.target.value)} />
        <input type="text" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
        <div><ProfileCard name={name} role={role} description={description} /></div>
    </div>
  )
}

export default liveUpdate