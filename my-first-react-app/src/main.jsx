import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import Education from './Education.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>MODULE 5 Assignment</h1>
    <Education title="Education institutions" description="The following is a list of educational institutions 
    I have attended" list=""/>
    <Education title="Education institutions" description="The following is a list of educational institutions 
    I have attended" list="Qualwood elementary"/>
  </React.StrictMode>,
)
