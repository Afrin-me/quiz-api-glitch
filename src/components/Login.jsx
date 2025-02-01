import React, {useState} from 'react'
import "../styles/login.css"


const Login=() =>{

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[error,setError]=useState(null)
    
    const handleSubmit= async (e)=>{
      e.preventDefault()

      try{
       const response = await axios({
         method: "POST",
         url: `https://thankful-flat-pilot.glitch.me/login`,
         data:{
            username:username,password:password
             
         }
        
       });
       
      }catch(err){
        console.log(error)
      }
      if(response.data.success){
        console.log(response.data.success);
      }
    }
    
    
    

  return (
    <div className="form-div">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder="enter username" />
        <br />
        <input type="password" placeholder="enter password" />
        <br />
        <input type="submit" value="Login" className="input-btn" /><br/>
      </form>
    </div>
  );
}

export default Login