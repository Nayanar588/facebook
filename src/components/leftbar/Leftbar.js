import React from "react";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import './leftbar.css';
class Leftbar extends React.Component{
    render(){
        return(
            <div className="leftbar">

                <div className="leftbarWrapper">
                    <ul className="leftbarList">
                        <li className="leftbarListItems">
                            <RssFeedIcon  className="leftbarIcon"/>
                            <span className="leftbarIconText">Feed</span>
                        </li>

                        <li className="leftbarListItems">
                            <ChatIcon  className="leftbarIcon"/>
                            <span className="leftbarIconText">Chat</span>
                        </li>

                        <li className="leftbarListItems">
                            < OndemandVideoIcon className="leftbarIcon"/>
                            <span className="leftbarIconText">Video</span>
                        </li>

                        <li className="leftbarListItems">
                            < GroupsIcon className="leftbarIcon"/>
                            <span className="leftbarIconText">Groups</span>
                        </li>

                        <li className="leftbarListItems">
                            <BookmarksIcon  className="leftbarIcon"/>
                            <span className="leftbarIconText">Bookmarks</span>
                        </li>

                        <li className="leftbarListItems">
                            <HelpCenterIcon  className="leftbarIcon"/>
                            <span className="leftbarIconText">Questions</span>
                        </li>

                        <li className="leftbarListItems">
                            <WorkIcon  className="leftbarIcon"/>
                            <span className="leftbarIconText">Jobs</span>
                        </li>

                        <li className="leftbarListItems">
                            <EventIcon  className="leftbarIcon"/>
                            <span className="leftbarIconText">Events</span>
                        </li>

                        <li className="leftbarListItems">
                            <SchoolIcon  className="leftbarIcon"/>
                            <span className="leftbarIconText">Course</span>
                        </li>

                    </ul>
                    <button className="leftbarButton">Show More</button>
                    <hr className="leftbathr"></hr>
                    <ul className="leftbarFriendList">
                        <li className="leftbarFriend>">
                        <img className="leftbarFriendImg" src="img1.jpg " alt="rohith sharma "/>
                        <span className="leftbarFriendName">Rohith Sharma</span>
                        </li>

                        <li className="leftbarFriend>">
                        <img className="leftbarFriendImg" src="img2.jpg " alt="Sachin "/>
                        <span className="leftbarFriendName">Sachin Tendulkar</span>
                        </li>

                        <li className="leftbarFriend>">
                        <img className="leftbarFriendImg" src="img3.jpg " alt="Rahul "/>
                        <span className="leftbarFriendName">Rahul</span>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}

export default Leftbar;