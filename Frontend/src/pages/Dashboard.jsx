import axios from "axios"
import { useState,useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import { AppBar } from "../components/AppBar.jsx"
import { Balance } from "../components/Balance.jsx"
import { Users } from "../components/Users.jsx"

export function Dashboard(){
    
    const [balance,setBalance] = useState(0)

    const [searchParams] = useSearchParams()

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
        <AppBar name = {searchParams.get("name")} />
        <Balance value = {balance.toLocaleString("en-IN", {
            maximumFractionDigits: 3          
        })} />
        <Users />
    </>)
}