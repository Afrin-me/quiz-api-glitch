import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar" 
import Home from "./components/Home"
import Quiz from './components/Quiz';
import Login from './components/Login';
import QuizItem from './components/QuizItem';
import Result from './components/result';






function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quizitem" element={<QuizItem />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App
