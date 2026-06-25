import {useState,useContext} from "react"
import {useNavigate} from "react-router-dom"
import {Button} from "./Button"
import {ConfirmContext} from "../context/ConfirmContext.jsx"

export function AppBar({name}){
    const [logOutTab,setlogOutTab] = useState(false)
    const [confirm,setConfirm] = useState(false)
    
    return (<>
        <ConfirmContext.Provider value = {{confirm,setConfirm}}>
        <div className = "flex justify-between shadow h-14">
            <div className = "flex flex-col justify-center h-full ml-4">
                Payment App
            </div>
            <div className = "flex">
                <div className = "flex flex-col justify-center h-full mr-2.5 ">
                    Hello
                </div>
                <div onClick = {()=>{
                    setlogOutTab(!logOutTab)
                }}className = "border-1 hover:border-black border-transparent rounded-full h-10 w-10 bg-slate-200 flex justify-center mr-4 mt-2">
                    <div className = "flex flex-col justify-center h-full text-lg">
                        {name[0].toUpperCase()}
                    </div>
                </div>
                <div
                    onClick = {()=>{
                        setConfirm(true)
                    }}
                    className={`hover:border-red-600 shadow-xs fixed top-0 right-0 mt-14 h-12 w-32 bg-white border-slate-400 rounded-l-md border-1 flex justify-center
                    transition-transform duration-300
                    ${logOutTab ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className = "text-red-600 flex flex-col justify-center pr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                        </svg>
                    </div>
                    <div className = "text-red-600 text-md flex flex-col justify-center">
                        Log out
                    </div>
                </div>
            </div>
        </div>
        {confirm ? <Confirm /> : <></>}
    </ConfirmContext.Provider>
    </>
    )
}


function Confirm(){
    const {setConfirm} = useContext(ConfirmContext)
    const navigate = useNavigate()
    
    return (
        <div className = "fixed inset-0 bg-black/50 h-screen flex justify-center">
            <div className = "flex flex-col justify-center">
                <div className = "rounded-lg bg-white w-90 text-center p-2 h-max px-4 ">
                    <div className = "text-lg m-6">
                        Are you sure you want to log out?
                    </div>
                    <div className = "flex justify-center">
                        <Button onClick = {()=>{
                            localStorage.removeItem("token");
                            navigate("/signup")
                            setConfirm(false)
                        }} label = {"Log out"} />
                        <Button onClick = {()=>{
                            setConfirm(false)
                        }} label = {"Cancel"} />
                    </div>
                </div>
            </div>
        </div>
    )
}