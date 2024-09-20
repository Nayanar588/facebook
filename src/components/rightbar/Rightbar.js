import React from "react";
import './rightbar.css';

class Rightbar extends React.Component{
    render(){
        return(
            <div className="rightbar">
                <div className="rightbarWrapper">
                    <div className="birthdayContainer">
                        <img src="12.jpg" alt="birthday" className="birthdayImg" />
                        <span className="birthdayText"><b>MS DHONI</b> and <b>2 other friends</b> having birthday today</span>
                    </div>
                    <img src="23.jpg" alt="advertisment" className="rightbarAd"/>
                    <h4 className="rightbarTitle">Online Friends</h4>
                    <ul className="friendList">
                        <li className="rightbarFriend">
                            <div className="rightbarProfileImgContainer">
                                <img src="1.jpg" alt="kohli" className="rightbarProfileImg"/>
                                <span className="rightbarOnline"></span>
                            </div>
                            <span className="rightbarUsername">Virat Kohli</span>
                        </li>

                        <li className="rightbarFriend">
                            <div className="rightbarProfileImgContainer">
                                <img src="2.jpg" alt="kohli" className="rightbarProfileImg"/>
                                <span className="rightbarOnline"></span>
                            </div>
                            <span className="rightbarUsername">Virat Kohli</span>
                        </li>

                        <li className="rightbarFriend">
                            <div className="rightbarProfileImgContainer">
                                <img src="3.jpg" alt="kohli" className="rightbarProfileImg"/>
                                <span className="rightbarOnline"></span>
                            </div>
                            <span className="rightbarUsername">Virat Kohli</span>
                        </li>

                        <li className="rightbarFriend">
                            <div className="rightbarProfileImgContainer">
                                <img src="4.jpg" alt="kohli" className="rightbarProfileImg"/>
                                <span className="rightbarOnline"></span>
                            </div>
                            <span className="rightbarUsername">Virat Kohli</span>
                        </li>

                        <li className="rightbarFriend">
                            <div className="rightbarProfileImgContainer">
                                <img src="5.jpg" alt="kohli" className="rightbarProfileImg"/>
                                <span className="rightbarOnline"></span>
                            </div>
                            <span className="rightbarUsername">Virat Kohli</span>
                        </li>
                    </ul>
                </div>
                 
              
            </div>
        )
    }
}
export default Rightbar;