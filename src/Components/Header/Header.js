import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import MosqueIcon from '@mui/icons-material/Mosque';
import PagesIcon from '@mui/icons-material/Pages';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import GroupIcon from '@mui/icons-material/Group';
import MoreIcon from '@mui/icons-material/More';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
    return (
        <div className='header'>
          <div className="header_left">
            <img src="https://i.ibb.co/wcHg4NQ/images-removebg-preview.png" alt="" />

            <div className="header-input">
                <SearchIcon></SearchIcon>
                <input type="text" />
            </div>
          </div>

          <div className="header_center">
            <div className="header_option">
               <MosqueIcon></MosqueIcon>
            </div>
            <div className="header_option">
               <PagesIcon></PagesIcon>
            </div>
            <div className="header_option">
               <OndemandVideoIcon></OndemandVideoIcon>
            </div>
            <div className="header_option">
               <LocalGroceryStoreIcon></LocalGroceryStoreIcon>
            </div>
            <div className="header_option">
               <GroupIcon></GroupIcon>
            </div>
            <div className="header_option">
              <MoreIcon></MoreIcon>
            </div>
          </div>

          <div className="header_right">
            <div className="header_info">
            <NotificationsIcon></NotificationsIcon>
                <MessageIcon></MessageIcon>
              
                
                <AccountCircleIcon></AccountCircleIcon>
              
            </div>
            
           
          </div>
        </div>
    );
};

export default Header;