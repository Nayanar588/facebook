import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import './post.css';
function Post(){
    
        return(
            <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <img src="img.jpg" alt="kohli" className="postProfileImg"/>
                            <span className="postUserName">Virat Kohli</span>
                            <span className="postDate">10 mins ago </span>
                        </div>
                        <div className="postTopRight">
                            <FiMoreVertical />
                        </div>
                    </div>
                    <div className="postCenter">
                        <span className="postText">The only things we have is the MOMENT</span>
                        <img src="8.jpg" alt="Kohli" className="postImg" />
                    </div>

                    <div className="postBottom">
                        <div className="postButtonLeft">
                        <img src="like.jpg" alt="heart" className="heartIcon" />
                        <img src="123.jpg" alt="like" className="likeIcon" />
                        <span className="postlikeCounter">769583983 people like it </span>
                    </div>
                    <div className="postButtonRigt">
                        <span className="postCommentCounter">578 comments</span>
                    </div>
                    </div>

                </div>
            </div>
        )
    }

export default Post;