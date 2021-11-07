import React from "react";
import "./rightbar.css";
import UserOnline from "../userOnline/UserOnline";
import { VideoCall, Search, MoreHoriz } from "@material-ui/icons";
import { userData } from "../../data.js";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="gift" />
          <span className="birthdayText">
            <b>Azizul Chowdhury</b> and <b>3 other friends </b>have a birthday
            today.
          </span>
        </div>
        <div className="rightbarAd">
          <img src="/assets/ad.png" alt="ad" />
        </div>
        <div className="rightbarContactList">
          <div className="contactListTitle">
            <h2>Contacts</h2>
            <div className="contactListTitleIcon">
              <ul>
                <li>
                  <VideoCall />
                </li>
                <li>
                  <Search />
                </li>
                <li>
                  <MoreHoriz />
                </li>
              </ul>
            </div>
          </div>
          <div className="friendProfiles">
            {userData.map((user) => (
              <UserOnline key={user.id} userData={user} />
            ))}
          </div>
        </div>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4>User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span>City:</span>
            <span>New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span>From:</span>
            <span>Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span>Relationship:</span>
            <span>Single</span>
          </div>
        </div>
        <h4>User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="/assets/person/10.jpeg" alt="6.jpeg" />
            <span>Kamrul islam</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/2.jpeg" alt="6.jpeg" />
            <span>Kamrul islam</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/3.jpeg" alt="6.jpeg" />
            <span>Kamrul islam</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/4.jpeg" alt="6.jpeg" />
            <span>Kamrul islam</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/5.jpeg" alt="6.jpeg" />
            <span>Kamrul islam</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/6.jpeg" alt="6.jpeg" />
            <span>Kamrul islam</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/7.jpeg" alt="6.jpeg" />
            <span>Kamrul islam</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/8.jpeg" alt="6.jpeg" />
            <span>Kamrul islam</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
