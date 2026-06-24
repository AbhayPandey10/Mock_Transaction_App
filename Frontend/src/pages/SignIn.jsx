import {useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"

export function SignIn(){

    const navigate = useNavigate()

    const [userInfo,setUserInfo] = useState({
        username : "",
        password : ""
    })

    const onClick = async ()=>{
        try{    
            const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                ...userInfo
            })
            localStorage.setItem("token",response.data.token)
            navigate("/dashboard?name=" + response.data.user.firstName)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className = "bg-slate-300 h-screen flex justify-center">
            <div className = "flex flex-col justify-center">
                <div className = "rounded-lg bg-white w-80 text-center p-2 h-max px-4 ">
                    <Heading label = "Sign In"></Heading>
                    <SubHeading label = "Enter your credentials to access your account"></SubHeading>
                    <InputBox onChange = {(e)=>{
                        setUserInfo({...userInfo,username : e.target.value})
                    }} label = "Email" placeholder = "abhay@gmail.com"></InputBox>
                    <InputBox onChange = {(e)=>{
                        setUserInfo({...userInfo,password : e.target.value})
                    }} label = "Password" placeholder = "1234"></InputBox>
                    <Button onClick = {onClick} label = "Sign In"></Button>
                    <BottomWarning label = "Don't have an account?" buttonText = "Sign Up" to = "/SignUp"></BottomWarning>
                </div>
            </div>
        </div>
    )
}