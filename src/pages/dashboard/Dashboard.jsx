import React from 'react';
// import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
// import List from '../../components/table/List';
import Widget from '../../components/widget/Widget';
import "./Dashboard.scss";
import Card from '../../components/cards/Card';

const Dashboard = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className='homeContainer'>
            <Navbar/>
            <div className='widgets'>
                <Widget type = "specified"/>
                <Widget type = "incomplete"/>
                <Widget type = "in progress"/>
                <Widget type = "processed"/>
            </div>
            <div className='widgets'>
               <Card/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard