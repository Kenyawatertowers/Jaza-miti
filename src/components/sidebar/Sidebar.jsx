import React from 'react'
import './Sidebar.scss'
import { Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
            <Link to="/" style={{textDecoration:"none"}}>
                <img className='logo' src='https://watertowers.go.ke/wp-content/uploads/2021/03/cropped-Final-KWTA-Logo_-1.png' alt=''/>
            {/* <span className='logo'>H@rtman</span> */}
            </Link>
            </div>
            <hr/>
        <div className='center'>
            <ul>
                <Link to='/' style={{textDecoration:"none"}}>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                    <ArrowBackIosRoundedIcon className='icon'/>
                    </li>
                    </Link>
                    <Link to="/species" style={{textDecoration:"none"}}>
                    <li>
                        <PublicOutlinedIcon className='icon'/>
                    <span>Species to site matching</span>
                    <ArrowBackIosRoundedIcon className='icon'/>
                    </li>
                    </Link>
                    <Link to="/planting" style={{textDecoration:"none"}}>
                    <li>
                        <ForestOutlinedIcon className='icon'/>
                    <span>Add Planting Activity</span>
                    <ArrowBackIosRoundedIcon className='icon'/>
                    </li>
                    </Link>
                    <Link to="/analysis" style={{textDecoration:"none"}}>
                    <li>
                        <PlaceOutlinedIcon className='icon'/>
                    <span>GIS ANALYSIS</span>
                    <ArrowBackIosRoundedIcon className='icon'/>
                    </li>
                    </Link>
                    <Link to="/activities" style={{textDecoration:"none"}}>
                    <li>
                        <StoreIcon className='icon'/>
                    <span>Activities</span>
                    <ArrowBackIosRoundedIcon className='icon'/>
                    </li>
                    </Link>
                    <Link to="/reports" style={{textDecoration:"none"}}>
                    <li>
                        <CreditCardIcon className='icon'/>
                    <span>Reports</span>
                    <ArrowBackIosRoundedIcon className='icon'/>
                    </li>
                    </Link>
                    <Link to="/stats" style={{textDecoration:"none"}}>
                    {/* <p className='title'>USEFUL</p> */}
                    <li>
                        <InsertChartIcon className='icon'/>
                    <span>Stats</span>
                    <ArrowBackIosRoundedIcon className='icon'/>
                    </li>
                    </Link>
                    <Link to="/stats" style={{textDecoration:"none"}}>
                    <li>
                        <NotificationsNoneIcon className='icon'/>
                    <span>Notifications</span>
                    <ArrowBackIosRoundedIcon className='icon'/>
                    </li>
                    </Link>
                    <Link to="/main" style={{textDecoration:"none"}}>
                    <li>
                        <SettingsSystemDaydreamIcon className='icon'/>
                    <span>Questionnaire</span>
                    <ArrowBackIosRoundedIcon className='icon'/>
                    </li>
                    </Link>
                    <Link to="/systemhealth" style={{textDecoration:"none"}}>
                    <li>
                        <PsychologyOutlinedIcon className='icon'/>
                    <span>Demands</span>
                    <ArrowBackIosRoundedIcon className='icon'/>
                    </li>
                    </Link>
                    <Link to="/systemhealth" style={{textDecoration:"none"}}>
                    <li>
                        <SettingsIcon className='icon'/>
                    <span>Settings</span>
                    <ArrowBackIosRoundedIcon className='icon'/>
                    </li>
                    </Link>
                    <Link to="/systemhealth" style={{textDecoration:"none"}}>
                    {/* <p className='title'>USER</p> */}
                    <li>
                        <AccountCircleOutlinedIcon className='icon'/>
                    <span>Profile</span>
                    <ArrowBackIosRoundedIcon className='icon'/>
                    </li>
                    </Link>
                    <Link to="/" style={{textDecoration:"none"}}>
                    <li>
                        <LogoutIcon className='icon'/>
                    <span>Logout</span>
                    </li>
                    </Link>
                </ul>
            </div>
      <div className='bottom'>
      <div className='bottom'>
            {/* <div className='colorOption' onClick={()=>dispatch({type:"LIGHT"})}></div> */}
            {/* <div className='colorOption' onClick={()=>dispatch({type:"DARK"})}></div> */}
        </div>
      </div>
      
    </div>
  )
}

export default Sidebar
