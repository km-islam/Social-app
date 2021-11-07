import React from "react";
import "./useronline.css";

const UserOnline = ({ userData }) => {
  return (
    <div>
      <div className="friendProfile">
        <img src={userData.userpic} alt="4.jpeg" />
        <span>{userData.userName}</span>
        <div className="onlineStatus"></div>
      </div>
    </div>
  );
};

export default UserOnline;
