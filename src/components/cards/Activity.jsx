import React from 'react'
import './Activity.scss'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const Activity = ({title,counter,image}) => {
  return (
    <div className='widget'>
    <div className='left'>
      <image src={image} alt={image} className='icon'/>
      {/* <span className='icon'>{image}</span> */}
        <span className='title'>{title}</span>
        <span className='counter'>{counter}</span>
    </div>
    <div className='right'>
        <div className='percentage positive'>
            <ArrowForwardOutlinedIcon/>
            
            </div>
    </div>
</div>
  )
}

export default Activity
