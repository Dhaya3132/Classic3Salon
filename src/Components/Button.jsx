function Button({onClick, children}) {
    return (
        <button  onClick={onClick}
        className="px-4 py-2 border-solid border-2 border-slate-300 rounded-full text-white w-fit mt-5 hover:bg-Green hover:text-white hover:border-none 
        Mobile-S:px-2 Mobile-S:py-2 Mobile-S:text-sm Mobile-S:text-white Mobile-M:text-white Mobile-L:text-white">{children}</button>
    )
}
export default Button;