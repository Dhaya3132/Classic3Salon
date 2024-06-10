import Timer from "./Timer";
function Offer(){
    return (
        <div className=" mt-3 bg-Green p-3 flex gap-3 justify-center 
        Mobile-S:w-full Mobile-S:flex-col Mobile-S:justify-center Mobile-S:items-center Mobile-S:p-2 Mobile-S:gap-1 
        Mobile-M:w-full Mobile-M:flex-col Mobile-M:justify-center Mobile-M:items-center Mobile-M:p-2 Mobile-M:gap-2
        Mobile-L:w-full Mobile-L:flex-col Mobile-L:justify-center Mobile-L:items-center Mobile-L:p-3 Mobile-L:gap-3">
            <h3 className="font-Poppins font-medium text-white Mobile-S:text-sm Mobile-M:text-sm">Get flat 20% offer on every service</h3>
            <Timer initalDay={2} initalHours = {0} initialMinutes={300} initialSeconds={0} />
        </div>
    )
}

export default Offer;