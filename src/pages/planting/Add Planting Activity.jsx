import React,{useState} from 'react'
import './Planting.scss'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const AddPlanting = () => {

  const submit = (e) =>{
    e.preventDefault()
    console.log("clicked")
  }
    // const [upload,setUpload] = useState("")
    const [organization,setOrganization] = useState('')
    const [place,setPlace] = useState('')
    const [species,setSpecies] = useState('')
    const [number,setNumber]  = useState('')
  return (
    <div className='planting'>
        <Sidebar/>
        <div className='plantingContainer'>
            <Navbar/>
      <div className='title'>
        <div className='time'>
            <h3>Today</h3>
        </div>
        <div className='update'>
            <Link style={{textDecoration:"none"}} className='date'>Change Date</Link>
        </div>
      </div>
      <div className='form'>
        <input placeholder='kenya water towers agency' value={organization} onChange={(e)=>setOrganization(e.target.value)}/>
        <input placeholder='Planting Location' value={place} onChange={(e)=>setPlace(e.target.value)}/>
        <input placeholder='Species Planted' value={species} onChange={(e)=>setSpecies(e.target.value)}/>
        <input placeholder='Number Planted' value={number} onChange={(e)=>setNumber(e.target.value)}/>
      </div>
      <div className='avatar'>{<DriveFolderUploadOutlinedIcon/>}</div>
      <button className='submit' onClick={submit}>SUBMIT</button>
    </div>
      </div>
  )
}

export default AddPlanting 
