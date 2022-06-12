import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Header from './components/Header/Header'

// import pages for navigation with react-router

// import Home from '../src/pages/Home/Home'
import Planner from './pages/Planner/Planner'
import NewWorkout from './pages/NewWorkout/NewWorkout'
import SignUp from './pages/User/Signup/Signup'
import Login from './pages/User/Login/Login'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="planner" element={<Planner />} />
        <Route path="newworkout" element={<NewWorkout />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
