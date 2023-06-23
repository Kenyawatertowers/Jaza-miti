import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import data,{answers} from '../components/database/database'

// redux actions
import * as Action from '../redux/question_reducer'

export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData,setGetData] = useState({isLoading:false,apiData:[],serverError: null})

    useEffect(()=>{
        setGetData(prev => ({...prev, isLoading: true}));

        // async function fetch backend data
        (async () =>{
            try {
                let question = await data;

                if(question.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev,apiData : {question,answers}}));

                    // dispatch an action
                    dispatch(Action.startExamAction({question,answers}))
                }else {
                    throw new Error("No Question Available")
                }
            } catch (error) {
                setGetData(prev => ({...prev,isLoading : false}));
                setGetData(prev => ({...prev,serverError : error}));
            }
        })();
    },[dispatch]);
  return [getData,setGetData];
  
}
// moveAction Dispatch function
export const moveNextQuestion = (dispatch) => {
    try {
        dispatch(Action.moveNextAction());
    } catch (error) {
        console.log(error)
    }
}

// prevAction Dispatch function
export const movePrevAction = (dispatch) => {
    try {
        dispatch(Action.movePrevAction());
    } catch (error) {
        console.log(error)
    }
}