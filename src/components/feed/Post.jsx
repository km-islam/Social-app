import { useState } from "react";
import "./post.css";
import { MoreHoriz, Public } from "@material-ui/icons";
import { userData } from "../../data.js";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setisLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setisLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={userData.filter((u) => u.id === post.userId)[0].userpic}
              alt="5.jpeg"
            />
            <div>
              <h4 className="postUserName">
                {userData.filter((u) => u.id === post.userId)[0].userName}
              </h4>
              <span className="postDate">
                {post.date}. <Public />
              </span>
            </div>
          </div>
          <div className="postTopRight">
            <MoreHoriz />
          </div>
        </div>
        <div className="postCenter">
          <p>{post?.post}</p>
          <img src={post?.photo} alt="3.jpeg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.png" alt="like" onClick={likeHandler} />
            <img src="/assets/heart.png" alt="heart" onClick={likeHandler} />
            <span>{like} </span>
          </div>
          <div className="postBottomRight">
            <p> {post.comment} comments </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
