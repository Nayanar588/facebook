import React from "react"; 
import './main.css';
import Topbar from "../topbar/Topbar"; 
import Leftbar from "../leftbar/Leftbar";
import Centerbar from "../center/Centerbar";
import Rightbar from "../rightbar/Rightbar";

import './main.css';

class Main extends React.Component{ 
    render(){ 
      return( 
        <div> 
            <Topbar/> 
            <div className="homeContainer">
            <Leftbar />
            <Centerbar />
            <Rightbar />
            </div>
            
 
        </div> 
      ) 
 
        
    } 
} 
export default Main;