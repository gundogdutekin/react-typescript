import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Courses from './components/Courses'
import Request from './components/Request'
import EventAction from './components/EventAction'
import LoginChecker from './components/LoginChecker'
import ReducerExam from './components/ReducerExam'
import ContextExam from './components/ContextExam'
import { ThemeProvider } from './components/ThemeContext'
import RefExam from './components/RefExam'

function App() {
  const adminInfo={
    name: "Tekin Gündoğdu",
    coursenumber: 10
  }
  const courses = [
    { name: "React", price: 100 },
    { name: "Angular", price: 200 },
    { name: "Vue", price: 300 },
    { name: "Node", price: 400 },
    { name: "Express", price: 500 },
    { name: "MongoDB", price: 600 },
    { name: "Mongoose", price: 700 },
    { name: "TypeScript", price: 800 },
    { name: "JavaScript", price: 900 },

  ]

  return (
    <div className="App">
      <Home name="Tekin Gündoğdu" admininfo={adminInfo} coursenumber={10}/>
      <Courses courses={courses}/>
      <Request status="error"/>
      <EventAction/>
      <LoginChecker/>
      <ReducerExam/>
      <ThemeProvider>
          <ContextExam/>
      </ThemeProvider>
      <RefExam/>
    
    </div>
  )
}

export default App
