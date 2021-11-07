import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilled,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  Layers,
} from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarList">
          <ul>
            <li>
              <RssFeed />
              <span>Feed</span>
            </li>
            <li>
              <Chat />
              <span>Chats</span>
            </li>
            <li>
              <PlayCircleFilled />
              <span>Videos</span>
            </li>
            <li>
              <Group />
              <span>Group</span>
            </li>
            <li>
              <Bookmark />
              <span>Bookmarks</span>
            </li>
            <li>
              <HelpOutline />
              <span>Questions</span>
            </li>
            <li>
              <WorkOutline />
              <span>Jobs</span>
            </li>
            <li>
              <Event />
              <span>Events</span>
            </li>
            <li>
              <Layers />
              <span>Courses</span>
            </li>
          </ul>
        </div>
        <button className="sidebarBtn">Show More</button>
        <hr className="sidebarHr" />
        <div className="sidebarFriendsList">
          <ul>
            <li>
              <img src="/assets/person/2.jpeg" alt="2.jpeg" />
              <span className="friendName">Kamrul islam</span>
            </li>
            <li>
              <img src="/assets/person/1.jpeg" alt="1.jpeg" />
              <span className="friendName">Kamrul islam</span>
            </li>
            <li>
              <img src="/assets/person/3.jpeg" alt="3.jpeg" />
              <span className="friendName">Kamrul islam</span>
            </li>
            <li>
              <img src="/assets/person/4.jpeg" alt="4.jpeg" />
              <span className="friendName">Kamrul islam</span>
            </li>
            <li>
              <img src="/assets/person/5.jpeg" alt="5.jpeg" />
              <span className="friendName">Kamrul islam</span>
            </li>
            <li>
              <img src="/assets/person/7.jpeg" alt="7.jpeg" />
              <span className="friendName">Kamrul islam</span>
            </li>
            <li>
              <img src="/assets/person/8.jpeg" alt="8.jpeg" />
              <span className="friendName">Kamrul islam</span>
            </li>
            <li>
              <img src="/assets/person/9.jpeg" alt="9.jpeg" />
              <span className="friendName">Kamrul islam</span>
            </li>
            <li>
              <img src="/assets/person/10.jpeg" alt="10.jpeg" />
              <span className="friendName">Kamrul islam</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
