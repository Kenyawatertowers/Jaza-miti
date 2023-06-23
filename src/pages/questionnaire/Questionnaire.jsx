import React,{useState} from 'react';
import Questions from '../../components/questionnaire/Questions';
import { moveNextAction,movePrevAction } from '../../redux/question_reducer';

// redux store import
import { useDispatch,useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Questionnaire = () => {
  const [check,setChecked] = useState(undefined)
  const {queue,trace} = useSelector(state => state.questions);
  const dispatch = useDispatch();
  // const result = useSelector(state => state.result.result);

  // next button event handler
  const onNext = () =>{
    // update the trace value by one using MoveNextAction
    if(trace < queue.length){
      dispatch(moveNextAction());
    }
  }
  // reset the value of the checked variable
  setChecked(undefined)

  // prev button event handler
  const onPrev = () =>{
    if(trace > 0){
      dispatch(movePrevAction());
    }
  }

  const onChecked = (check) =>{
    console.log(check)
    setChecked(check)
  }
  // finished exam after the last question
  // if(result.length && result.length >= queue.length){
    // return <Navigate to={'/result'} replace={true}/>
  // }
  return (
    <div className='container'>
      <h1 className='title text text-light'>Test Application</h1>
      {/* display questions */}
      <Questions onChecked={onChecked}/>
      <div className='grid'>
        {trace > 0 ? <button onClick={onPrev} className='btn prev'>Prev</button> : <div></div>}
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  )
}

export default Questionnaire