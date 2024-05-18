export function Button({children}) {
    return (
        <button className="px-4 py-2 border-solid border-2 border-slate-700 rounded-full text-slate-700 w-fit mt-5 hover:bg-green-500 hover:text-white hover:border-none">{children}</button>
    )
}