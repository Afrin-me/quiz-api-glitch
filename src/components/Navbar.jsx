import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/navbar.css"

const Navbar=()=> {
  return (
    <nav className='navbar'>
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/quiz" className="link">
        Quiz
      </Link>
      <Link to="/quizitem" className="link">
        QuizItem
      </Link>
      <Link to="/result" className="link">
        Result
      </Link>
    </nav>
  );
}

export default Navbar