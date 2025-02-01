import React, {useEffect, useState}from 'react'
import axios from 'axios'


const Quiz=()=> {

    const[ques,setQues]= useState([])
    const[loading, setLoading]= useState(true)
    const[error,setError] = useState(null)
   
    
   

 useEffect(()=>{

    const fetchQues = async () => {
      try {
        const response = await axios.get(
          
           `https://thankful-flat-pilot.glitch.me/questions`
        );
        console.log(response.data.questions)
        setQues(response.data.questions)
        setLoading(false)
      } catch (err) {
        console.log(error)
      }
    };
    fetchQues()
 },[])
  
  return (
    <>
    {loading && <p>Loading...</p>}
    {error && <p>error in loading</p>}

    {
      ques.map((el)=>{
        return (
          <div key={el.id}>
            <p>Question:{el.question}</p>
            <p>Options: {el.options}</p>
            <p>Answer:{el.answer}</p>
          </div>
        );
      })
    }
    </>
  )
}

export default Quiz