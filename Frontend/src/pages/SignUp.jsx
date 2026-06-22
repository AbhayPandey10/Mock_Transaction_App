import { useState } from "react"
import axios from "axios"
import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"


export function SignUp(){
    const [userInfo,setUserInfo] = useState({
        firstName : "",
        lastName : "",
        username : "",
        password : ""
    })
    

    const onClick = async ()=>{
        const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
            ...userInfo
        })
        localStorage.setItem("token",response.data.token)
    }

    return (
        <div className = "bg-slate-300 h-screen flex justify-center">
            <div className = "flex flex-col justify-center">
                <div className = "rounded-lg bg-white w-80 text-center p-2 h-max px-4 ">
                    <Heading label = "Sign Up"></Heading>
                    <SubHeading label = "Enter your information to create an account"></SubHeading>
                    <InputBox onChange = {e => {
                        setUserInfo({...userInfo,firstName : e.target.value})
                    }} label = "First Name" placeholder = "Abhay"></InputBox>
                    
                    <InputBox onChange = {e => {
                        setUserInfo({...userInfo,lastName : e.target.value})
                    }} label = "Last Name" placeholder = "Pandey"></InputBox>
                    
                    <InputBox onChange = {e => {
                        setUserInfo({...userInfo,username : e.target.value})
                    }} label = "Email" placeholder = "abhay@gmail.com"></InputBox>
                    
                    <InputBox onChange = {e => {
                        setUserInfo({...userInfo,password : e.target.value})
                    }} label = "Password" placeholder = "1234"></InputBox>
                    
                    <Button onClick = {onClick} label = "Sign Up"></Button>
                    <BottomWarning label = "Already have an acccount?" buttonText = "Sign In" to = "/SignIn"></BottomWarning>
                </div>
            </div>
        </div>
    )
}