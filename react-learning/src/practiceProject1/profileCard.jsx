import React from 'react'

const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '16px auto',
    backgroundColor: '#fff'
};

const ProfileCard = ({ name, role, description }) => {
  return (
    <div className='profile-card' style={cardStyle}>
        <img src="public/vite.svg" alt="Profile" className='profile-image' />
        <h2 className='profile-name'>{name}</h2>
        <p className='profile-role'>{role}</p>
        <p className='profile-description'>{description}</p>
    </div>
  )
}

export default ProfileCard