import React, { useEffect } from 'react'
import './Main.scss'
import { useDispatch, useSelector } from 'react-redux'
import { resetAllAction } from '../../redux/question_reducer';
import ResultTable from '../../components/questionnaire/ResultTable';

const Result = () => {
  const dispatch = useDispatch();
  const {questions: {queue,answers},result : {result,userId}} = useSelector(state => state)

  useEffect(()=>{
    console.log("")
  })

  const totalPoints = queue.length * 10;
  // const attemtps = attempts_Number(result);
  // const earnPoints = earnPoinnts_Number(result,answers)

  const onRestart = () =>{
    dispatch(resetAllAction());
    dispatch(resetResultAction());
    // console.log(onRestart)
  }
  return (
    <div className='container'>
      <h1 className='title text text-light'>Test Application</h1>
      <div className='result flex-center'>
        <div className='flex'>
          <span>Username</span>
          <span className='bold'>Daily Tuition</span>
        </div>
        <div className='flex'>
          <span>Total Questions</span>
          <span className='bold'>05</span>
        </div>
        <div className='flex'>
          <span>Total Attempts:</span>
          <span className='bold'>03</span>
        </div>
        <div className='flex'>
          <span>Total Earn Points:</span>
          <span className='bold'>30</span>
        </div>
        <div className='flex'>
          <span>Quzie Results</span>
          <span className='bold'>Passed:</span>
        </div>
        <div className='container'>
          <ResultTable/>
        </div>
      </div>
      resultss
    </div>
  )
}

export default Result
