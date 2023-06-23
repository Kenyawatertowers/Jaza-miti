import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useFetchQuestion} from '../../hooks/FetchQuestion'
import { updateResultAction } from '../../redux/result_reducer'


const Questions = () => {
  const [checked,setChecked] = useState(undefined);
  const {trace} = useSelector(state =>state.questions);
  const result = useSelector(state => state.result);
  const [{isLoading,apiData,serverError}] = useFetchQuestion();
  useSelector(state => console.log(state))

  const questions = useSelector(state => state.questions.queue[state.questions.trace])
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(updateResultAction({trace,checked}))
  },[checked])

  const onSelect = (i) => {
    checked(i)
    setChecked(i)
    dispatch(updateResultAction({trace,checked}))
  }
  if(isLoading) return <h3 className='text-light'>isLoading</h3>
  if(serverError) return <h3>{serverError || "unknown Error"}</h3>
  return (
    <div className='questions'>
        <h2 className='text-light'>{questions?.question}</h2>
        <ul key={questions?.id}>
          {questions?.options .map((q,i)=>(
            <li key={i}>
              <input type="radio" value={false} name='Options' id={`q${i}-option`}
              onChange={()=>onSelect(i)} />

              <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
              <div className={`check ${result[trace] ==i ? 'checked' : ''}`}></div>
              <div className='check'></div>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Questions