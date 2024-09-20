import React from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import './centerbar.css';
class Centerbar extends React.Component{
    render(){
        return(
            <div className="centerbar">
                <div className="centerbarWrapper">
                <Share />
                <Post />
            </div>
            </div>
        )
    }
}
export default Centerbar;