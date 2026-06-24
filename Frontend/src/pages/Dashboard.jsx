import axios from "axios"
import { useState,useEffect } from "react"

import { AppBar } from "../components/AppBar.jsx"
import { Balance } from "../components/Balance.jsx"
import { Users } from "../components/Users.jsx"

export function Dashboard(){
    
    const [balance,setBalance] = useState(0)

    const getBalance = async ()=>{
        const response = await axios.get("http://localhost:3000/api/v1/account/balance",{
            headers : {
                Authorization : `Bearer ${localStorage.getItem("token")}`
            }
        })
        setBalance(response.data.balance)
    }
    
    useEffect(()=>{
        getBalance()
    },[])

    return (<>
        <AppBar />
        <Balance value = {balance.toLocaleString("en-IN", {
            maximumFractionDigits: 3          
        })} />
        <Users />
    </>)
}