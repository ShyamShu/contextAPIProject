import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import "./Profile.css"; // 👈 Make sure to create this file

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="profile-container">
        <div className="message-box error">⚠️ Please login to continue.</div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="message-box welcome">🎉 Welcome, {user.username}!</div>
    </div>
  );
}

export default Profile;
