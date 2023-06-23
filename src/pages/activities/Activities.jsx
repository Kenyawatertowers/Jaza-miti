import React from 'react'
import './Activities.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Activity from '../../components/cards/Activity'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Activities = () => {
  return (
    <div className='activities'>
      <Sidebar/>
      <div className='activitiesContainer'>
        <Navbar/>
        <div className='title'>Activities</div>
      <div className='widgets'>
               <Activity title='My Trees' counter={0} image={AccountCircleOutlinedIcon}/>
               <Activity title='My Organization' counter={176.567} image={GroupsOutlinedIcon}/>
               <Activity title='Country Wide' counter={101993.339} image={FlagOutlinedIcon}/>
            </div>
      </div>
    </div>
  )
}

export default Activities
