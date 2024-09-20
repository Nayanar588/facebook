import React from "react";
import './share.css';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import MoodIcon from '@mui/icons-material/Mood';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
class Share extends React.Component{
   
   

    render(){
        var style1={color: "red"};
        var style2={color: "blue"};
        var style3={color: "green"};
        var style4={color: "yellow"};

        return(
            <div className="share">
                <div className="shareWraapper">
                    <div className="shareTop">
                        <img src="img.jpg" alt=" kohli" className="shareProfileImg"/>
                        <input type="text" placeholder="What's in your mind Kohli" className="shareInput"></input>
                        
                    </div>
                    <hr className="shareHr"></hr>

                    <div className="shareButton1">
                        <div className="shareOptions">
                            <div className="shareOption">
                                <AddToPhotosIcon  className="shareIcon" style={style1}/>
                                <span className="shareOptionText"> Photo/Video</span>
                            </div> 

                            <div className="shareOption">
                                <LocalOfferIcon  className="shareIcon"  style={style2}/>
                                <span className="shareOptionText"> Tag</span>
                            </div>

                            <div className="shareOption">
                                <AddLocationIcon  className="shareIcon" style={style3}/>
                                <span className="shareOptionText"> Location</span>
                            </div>

                            <div className="shareOption">
                                <MoodIcon  className="shareIcon" style={style4}/>
                                <span className="shareOptionText"> Feelings</span>
                            </div>

                        </div>
                        <div >
                            <button className="shareButton"> Share</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Share;