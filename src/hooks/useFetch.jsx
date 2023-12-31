import {useEffect,useState} from 'react'
import axios from 'axios'

const useFetch = (url) => {
  const [data,setData] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState(null)

  useEffect(()=>{
    setIsLoading(true);
    axios.get(url)
    .then((response)=>{
      setData(response.data)
    })
    .catch((error)=>{
      setError(error);
    })
    .finally(()=>{
      setIsLoading(false)
    })
  },[url])
  return {data,isLoading,error}
}

export default useFetch;