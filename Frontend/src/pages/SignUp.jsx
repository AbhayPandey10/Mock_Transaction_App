import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"


export function SignUp(){
    return (
        <div className = "bg-slate-300 h-screen flex justify-center">
            <div className = "flex flex-col justify-center">
                <div className = "rounded-lg bg-white w-80 text-center p-2 h-max px-4 ">
                    <Heading label = "Sign Up"></Heading>
                    <SubHeading label = "Enter your information to create an account"></SubHeading>
                    <InputBox label = "First Name" placeholder = "Abhay"></InputBox>
                    <InputBox label = "Last Name" placeholder = "Pandey"></InputBox>
                    <InputBox label = "Email" placeholder = "abhay@gmail.com"></InputBox>
                    <InputBox label = "Password" placeholder = "1234"></InputBox>
                    <Button label = "Sign Up"></Button>
                    <BottomWarning label = "Already have an acccount?" buttonText = "Sign In" to = "/SignIn"></BottomWarning>
                </div>
            </div>
        </div>
    )
}