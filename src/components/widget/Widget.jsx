import React from 'react'
import "./Widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
// import StoreIcon from '@mui/icons-material/Store';
// import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
// import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Widget = ({type}) => {

    let data;

    // temporary
    const amount = 100;
    const diff = 20;


    switch(type){
        case "specified":
            data={title:"SE Sub-Projects",
             isMoney: false,
             link: "See all projects", 
            //  icon:<StoreIcon className='icon' style={{color:"crimson",backgroundColor:"rgba(0,128,0.0.2)",}}/>,
        };
        break;
        case "incomplete":
            data={title:"Ongoing Projects",
             isMoney: false,
             link:  "View all ongoing projects", 
            //  icon:<ShoppingCartOutlinedIcon className='icon' style={{backgroundColor:"rgba(0,128,0.0.2)",color
            // :"goldenrod"}}/>
        };
        break;
        case "in progress":
            data={title:"FN Complete Sub projects", isMoney: true,
        link:  "View complete projects",
        //  icon:<MonetizationOnOutlinedIcon className='icon' style={{backgroundColor:"rgba(0,128,0.0.2)",color
        // :"green"}}/>
        };
        break;
        case "processed":
            data={title:"PH Complete Sub project", isMoney: true,
        link:  "Sub projects not complet",
        //  icon:<AccountBalanceOutlinedIcon className='icon' style={{backgroundColor:"rgba(0,128,0.0.2)",color
        // :"purple",}}/>
        };
        break;
        default:
          break;  
    }
  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && "&"}{amount}</span>
            <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
            <div className='percentage positive'>
                <KeyboardArrowUpOutlinedIcon/>
                {diff}%
                </div>
                {data.icon}
        </div>
    </div>
  )
}

export default Widget