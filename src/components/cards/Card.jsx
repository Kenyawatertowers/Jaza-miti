import React from 'react'
import './Card.scss'

const Card = () => {

    // let data;

    // temporary
    // const amount = 100;
    // const diff = 20;


    // switch(type){
    //     case "specified":
    //         data={title:"SE Sub-Projects",
    //          isMoney: false,
    //          link: "See all projects", 
    //         //  icon:<StoreIcon className='icon' style={{color:"crimson",backgroundColor:"rgba(0,128,0.0.2)",}}/>,
    //     };
    //     break;
    //     case "incomplete":
    //         data={title:"Ongoing Projects",
    //          isMoney: false,
    //          link:  "View all ongoing projects", 
    //         //  icon:<ShoppingCartOutlinedIcon className='icon' style={{backgroundColor:"rgba(0,128,0.0.2)",color
    //         // :"goldenrod"}}/>
    //     };
    //     break;
    //     case "in progress":
    //         data={title:"FN Complete Sub projects", isMoney: true,
    //     link:  "View complete projects",
    //     //  icon:<MonetizationOnOutlinedIcon className='icon' style={{backgroundColor:"rgba(0,128,0.0.2)",color
    //     // :"green"}}/>
    //     };
    //     break;
    //     case "processed":
    //         data={title:"PH Complete Sub project", isMoney: true,
    //     link:  "Sub projects not complet",
    //     //  icon:<AccountBalanceOutlinedIcon className='icon' style={{backgroundColor:"rgba(0,128,0.0.2)",color
    //     // :"purple",}}/>
    //     };
    //     break;
    //     default:
    //       break;  
    // }
  return (
    <div className='widget'>
    <div className='left'>
        <div className='title'>
        Live Chart
        </div>
        <div className='counter'>
            live cover of the water towers
        </div>
    </div>
    <div className='center'>
        <div className='title'>
       Bar Chart
        </div>
        <div className='counter'>
            representation of data in bar charts
        </div>
    </div>
    <div className='right'>
        <div className='title'>
            Kenya Water towers
            </div>
            <div className='counter'>
                the gaetted kenya water towers
            </div>
    </div>
</div>
  )
}

export default Card
