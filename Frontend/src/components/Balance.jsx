export function Balance({value}){
    return (
        <div className = " flex py-4 ">
            <div className = "font-bold  mx-4">
                Your Balance
            </div>
            <div className = "font-semibold">
                Rs {value}
            </div>
        </div>
    )
}