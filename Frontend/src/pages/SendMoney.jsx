export function SendMoney(){
    return (
        <div className = "flex justify-center h-screen bg-gray-100">
            <div className = "h-full flex flex-col justify-center">
                <div className = "border border-gray-300 h-min text-card-foreground max-w-md p-4 my-8 w-96 bg-white shadow-lg rounded">
                    <div className = "flex flex-col my-1.5 p-6">
                        <h2 className = "text-3xl font-bold text-center">Send Money</h2>
                    </div>
                    <div className = "p-6">
                        <div className = "flex item-center">
                            <div className = "w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mr-4">
                                <span className = "text-2xl text-white">A</span>
                            </div>
                            <h3 className = "text-2xl font-semibold pt-2">Friend's Name</h3>
                        </div>
                        <div>
                            <div className = "mt-3">
                                <label className = "text-md font-medium leading-none peer-disabled:cursor-not-allowed" 
                                       for = "amount">
                                            Amount (in Rs)
                                </label>    
                                <input 
                                    type = "number"
                                    className = "flex h-10 w-full rounded-md border border-gray-300 border-input bg-background px-3 py-2 text-md my-2"
                                    id = "amount"
                                    placeholder = "Enter Amount"
                                />
                            </div>
                            <button className = "justify-center rounded-md text-md font-medium ring-offset-background w-full bg-green-500 py-2 text-white mt-4">
                                Initiate Transfer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}