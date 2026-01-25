import React from "react";

const ProfileCard = ({ name, role, projects, followers, following }) => {
  return (
    <div className="card-container">
      <div className="header-background"></div>

      <div className="profile-content">
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
          alt="Profile"
          className="avatar"
        />

        <h2 className="user-name">{name}</h2>
        <p className="user-role">{role}</p>

        <div className="stats-row">
          <div className="stat">
            <span className="stat-value">{projects} Projects</span>
          </div>
          <div className="stat">
            <span className="stat-value">{followers} Followers</span>
          </div>
          <div className="stat">
            <span className="stat-value">{following} Following</span>
          </div>
        </div>

        <button className="follow-btn">Follow Me</button>
      </div>
    </div>
  );
};

export default ProfileCard;
