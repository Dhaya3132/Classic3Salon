import Timer from "./Timer";
function Offer(){
    return (
        <div className="bg-Green p-3 flex gap-3 justify-center 
        Mobile-S:w-full Mobile-S:flex-col Mobile-S:justify-center Mobile-S:items-center Mobile-S:p-2 Mobile-S:gap-1 ">
            <h3 className="font-Poppins font-semibold Mobile-S:text-sm">Get flat 20% offer on every service</h3>
            <Timer initalDay={2} initalHours = {0} initialMinutes={300} initialSeconds={0} />
        </div>
    )
}

export default Offer;