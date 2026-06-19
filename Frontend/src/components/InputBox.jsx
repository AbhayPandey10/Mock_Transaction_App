export function InputBox({label,placeholder}){
    return(
        <div>
            <div className = "text-sm font-medium text-left py-2 px-1">
                {label}
            </div>
            <input placeholder = {placeholder} className = " w-full border border-gray-300 rounded-md px-4 py-1"></input>
        </div>
    )
}