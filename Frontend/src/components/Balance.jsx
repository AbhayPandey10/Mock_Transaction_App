export function Balance({value}){  
    return (
        <div className = " flex py-4 text-lg">
            <div className = "font-bold  mx-8">
                Your Balance
            </div>
            <div className = "font-semibold">
                Rs {value}
            </div>
        </div>
    )
}