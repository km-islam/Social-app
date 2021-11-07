import React from "react";
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profileContainer">
        <Sidebar />
        <div className="profileRight">
          <div className="profilrRightTop">
            <div className="profileCover">
              <img
                src="/assets/post/3.jpeg"
                alt="3.jpeg"
                className="profileCoverImg"
              />
              <img
                src="/assets/post/6.jpeg"
                alt="3.jpeg"
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4>Kamrul islam</h4>
              <span>Hello my friend</span>
            </div>
          </div>
          <div className="profilrRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
