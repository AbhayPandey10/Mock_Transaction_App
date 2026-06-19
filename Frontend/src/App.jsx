import { useState } from 'react'
import { BrowserRouter } from "react-router-dom"
import { SignUp } from "./pages/SignUp.jsx"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <SignUp></SignUp>
    </BrowserRouter>
  )
}

export default App
