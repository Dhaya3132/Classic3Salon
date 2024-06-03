function Button({onClick, children}) {
    return (
        <button  onClick={onClick} className="px-4 py-2 border-solid border-2 border-slate-300 rounded-full text-slate-300 w-fit mt-5 hover:bg-green-500 hover:text-white hover:border-none active:bg-green-500">{children}</button>
    )
}
export default Button;