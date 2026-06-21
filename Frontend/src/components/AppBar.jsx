export function AppBar(){
    return (
        <div className = "flex justify-between shadow h-14">
            <div className = "flex flex-col justify-center h-full ml-4">
                Payment App
            </div>
            <div className = "flex">
                <div className = "flex flex-col justify-center h-full mr-2.5 ">
                    Hello
                </div>
                <div className = "rounded-full h-10 w-10 bg-slate-200 flex justify-center mr-4 mt-2">
                    <div className = "flex flex-col justify-center h-full text-s">
                        A
                    </div>
                </div>
            </div>
        </div>
    )
}