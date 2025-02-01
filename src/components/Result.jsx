import React from 'react'
import "../styles/result.css"

const Result=()=> {

    const[result,setResult] = useState("")
    const[loading, setLoading]= useState(true)
    const[error, setError] = useState(null)

    useEffect(()=>{
        const fetchQues = async () => {
          try {
            const response = await axios.get(
              `https://thankful-flat-pilot.glitch.me/result/:userId`
            );
            console.log(response.data.result);
            setResult(response.data.result);
            setLoading(false);
          } catch (err) {
            console.log(error);
          }
        };
    },[])
  return (
    <div className="result-div">
      <h2>Yay!! Quiz Completed</h2>
    </div>
  );
}

export default Result