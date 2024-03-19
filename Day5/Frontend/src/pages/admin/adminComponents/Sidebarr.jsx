import React, { useState } from 'react';
import '../../../assets/css/Styles.css'
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../../Redux/features/userSlice';
import { useNavigate } from 'react-router-dom';

const Sidebarr = () => {
  const [open, setOpen] = useState(false);
const user=useSelector(selectUser);
const nav=useNavigate();
  const handleToggleDrawer = () => {
    setOpen(!open);
  };
  const dispatch=useDispatch();
  const logoutAdmin=()=>{
    dispatch(logout())
    alert("Logout Successfully!")
    nav("/")
  }
  return (
    <div>
    <MenuIcon onClick={handleToggleDrawer} style={{ cursor: 'pointer' }} />
    <Drawer open={open} onClose={handleToggleDrawer}>
      <div
        role="presentation"
        onClick={handleToggleDrawer}
        onKeyDown={handleToggleDrawer}
      >
    
    <div className="sidebar">
      <div className="user-info">
        <div className="user-details">
        <img src='https://www.billboard.com/wp-content/uploads/2022/12/christmas-holiday-gifts-2022-billboard-1548.jpg' height='60px' width='70px' style={{borderRadius:'50%',marginBottom:'20px'}} alt='profile-img'/>
          <h3>User : {user.user.username}</h3>
          <br/>
          <div className="line"></div>
        </div>
      </div>
      <ul className="sidebar-menu">
        <li> <DashboardIcon/>Dashboard</li>
        <li> <PersonIcon/>Account</li>
        <li> <PersonSearchIcon/>User Management</li>
        <li> <PersonSearchIcon/>Products Management</li>
        <li onClick={logoutAdmin}><LogoutIcon/>Logout</li>
      </ul>
      </div>
      </div>
      </Drawer>
    </div>
  );
};

export default Sidebarr;
