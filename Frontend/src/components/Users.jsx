import { useState,useEffect } from "react"
import { Button } from "./Button.jsx"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export function Users(){
    const [users,setUsers] = useState([])
    const [search,setSearch] = useState("")
    const [noUsers,setNoUsers] = useState(false)

    const token = localStorage.getItem("token")

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/getUsers?search=" + search,{
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
            .then((response)=>{
                setUsers(response.data.users)
                if(users.length === 0){
                    setNoUsers(true)
                }else{
                    setNoUsers(false)
                }
            })
    },[search])


    return (<>
        <div className = "ml-8 font-bold text-lg">
            Users
        </div>
        <div className = "mx-8 mt-2">
            <input onChange ={(e)=>{
                setSearch(e.target.value)
            }} type = "text" placeholder = "Search users..." className = "border border-gray-300 w-full px-2 py-1 rounded-md font-medium text-sm"></input>
        </div>
        <div>
            {users.length === 0 ? <NoUsers /> : users.map((user) => <User key = {user._id} user = {user} />)}
        </div>
    </>)
}

function User({user}){

    const navigate = useNavigate()

    const onClick = ()=>{
        navigate("/send?id=" + user._id + "&name=" + user.firstName)
    }

    return (
        <div className = "ml-10 mr-6 flex justify-between">
            <div className = "flex">
                <div className = "rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-2.75 mr-2">
                    <div className = "flex flex-col justify-center h-full text-l">
                        {user.firstName[0]}
                    </div>
                </div>
                <div className = "flex flex-col justify-center h-full text-sm font-medium">
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>

            <div className = "flex flex-col justify-center text-sm">
                <Button onClick = {onClick} label = {"Send Money"} />
            </div>
        </div>
    )
}

function NoUsers(){
    return (
        <div className = "text-center m-10 text-xl">
            No Users Found
        </div>
    )
}