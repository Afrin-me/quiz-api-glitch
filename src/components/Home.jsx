import React from 'react'
import "../styles/home.css"
import {useNavigate} from 'react-router-dom'



const Home=()=> {

    const navigate = useNavigate()
  return (
    <div className="home">
      <h1>Welcome to Quiz App!!!</h1>
      <p>
        Test your Knowledge and challenge yourself with our quiz. Please login
        to get started
      </p>
      <div>
        <button className="home-btn" onClick={()=>navigate("/login")}>Login</button>
      </div>
    </div>
  );
}

export default Home