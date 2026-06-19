export function Button({label}){
    return (
        <div className = "pt-3 py-2 px-2">
            <button
                type="button"
                class=" w-full inline-block rounded bg-neutral-800 pb-2 pt-2.5 text-xs font-medium leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                {label}
            </button>
        </div>
    )
}