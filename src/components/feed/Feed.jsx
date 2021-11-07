import React from "react";
import "./feed.css";
import Share from "./Share";
import Post from "./Post";
import {  postData } from "../../data.js";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {postData.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
