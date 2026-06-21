import { AppBar } from "../components/AppBar.jsx"
import { Balance } from "../components/Balance.jsx"
import { Users } from "../components/Users.jsx"

export function Dashboard(){
    return (<>
        <AppBar />
        <Balance />
        <Users />
    </>)
}