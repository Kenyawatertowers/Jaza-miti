import React,{useRef} from 'react'
import { Link } from 'react-router-dom'
import './Main.scss'
// import './App.css';

const Main = () => {
  const inputRef = useRef(null)
  return (
    <div className='container'>
      <h1 className='title text-light'>Questionnaire Application</h1>

      <ol>
        <li>You will be asked 10 Questions one after another,your answers wont be...</li>
        <li>Your time is highly appreciated for the work done</li>
        <li>Each question has three options. You can choose only one option </li>
        <li>You can review and change answers before the questionnaire finish</li>
        <li>The result wont be  declared </li>
      </ol>

      <form id='form'>
        <input ref={inputRef} type='text' className='userid' placeholder='Username*'/>
      </form>
    
    <div className='start'>
    <Link className='btn' to={'/questionnaire'}>Start Questionnaire</Link>
  </div>
  </div>
    
  )
}

export default Main
