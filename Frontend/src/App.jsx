import { useState } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { SignUp } from "./pages/SignUp.jsx"
import { SignIn } from "./pages/SignIn.jsx"
import { Dashboard } from "./pages/Dashboard.jsx"
import { SendMoney } from "./pages/SendMoney.jsx"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/SignUp" element = {<SignUp></SignUp>}></Route>
        <Route path = "/SignIn" element = {<SignIn></SignIn>}></Route>
        <Route path = "/Dashboard" element = {<Dashboard></Dashboard>}></Route>
        <Route path = "/SendMoney" element = {<SendMoney></SendMoney>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
