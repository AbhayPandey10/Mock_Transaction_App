import { useState } from "react"
import { Button } from "./Button.jsx"
import { useNavigate } from "react-router-dom"

export function Users(){
    const [users,setUsers] = useState([{
        firstName : "Abhay",
        lastName : "Pandey",
        _id : 1
    },{
        firstName : "Abhay",
        lastName : "Pandey",
        _id : 2
    }])

    return (<>
        <div className = "ml-8 font-bold text-lg">
            Users
        </div>
        <div className = "mx-8 mt-2">
            <input type = "text" placeholder = "Search users..." className = "border border-gray-300 w-full px-2 py-1 rounded-md font-medium text-sm"></input>
        </div>
        <div>
            {users.map((user) => <User key = {user._id} user = {user} />)}
        </div>
    </>)
}

function User({user}){

    const navigate = useNavigate()

    const onClick = ()=>{
        navigate("/SendMoney")
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