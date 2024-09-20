import React from "react"; 
import './topbar.css' 
import SearchIcon from '@mui/icons-material/Search'; 
import PersonIcon from '@mui/icons-material/Person'; 
import MessageIcon from '@mui/icons-material/Message'; 
import NotificationsIcon from '@mui/icons-material/Notifications'; 
class Topbar extends React.Component{ 
    render(){ 
      return( 
        <div className='topbarContainer'> 
            <div className='topbarLeft'> 
                <span className='logo'>FaceBook</span> 
 
            </div> 
            <div className='topbarCentre'> 
                <div className='searchbar'> 
                    <SearchIcon className="searchIcon"/> 
                    <input type="text" placeholder="search for friend ,post or video" className="searchInput"></input> 
                    </div> 
 
            </div> 
            <div className='topbarRight'> 
            <span className="topbarLink">HomePage</span> 
            <span className="topbarLink">TimeLine</span> 
 
            </div> 
            <div className="topbarIcons"> 

              <div className="topbarIconItems"> 
                    <PersonIcon/> 
                    <span className="topbarIconBadge">26 </span>
                    </div>
                <div className="topbarIconItems">
                    <MessageIcon/>
                    <span className="topbarIconBadge">61 </span>
                    </div>
                <div className="topbarIconItems">
                    <NotificationsIcon/>
                    <span className="topbarIconBadge">42 </span>
                     </div>
 
              </div> 
              <div className="topbarProfilePicture">
                <img src="img.jpg" alt=" " className="topbarImg" />
              </div>
            </div> 
      )    
    } 
} 
export default Topbar;