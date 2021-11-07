import React from "react";
import "./share.css";
import {
  PermMedia,
  Label,
  LocationOn,
  EmojiEmotions,
} from "@material-ui/icons";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" alt="1.jpeg" />
          <input
            type="text"
            placeholder="What's in your mind"
            className="shareInput"
          />
        </div>
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia className="photoIcon" />
              <span>Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label className="tagIcon" />
              <span>Tag</span>
            </div>
            <div className="shareOption">
              <LocationOn className="locationIcon" />
              <span>Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions className="feelingsIcon" />
              <span>Feelings</span>
            </div>
          </div>
          <div className="shareButton">
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
