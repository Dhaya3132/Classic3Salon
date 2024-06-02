import Timer from "./Timer";
function Offer(){
    return (
        <div className="bg-Green p-3 flex gap-3 justify-center">
            <h3 className="font-Poppins font-semibold">Get flat 20% offer on every service</h3>
            <Timer initalDay={2} initalHours = {0} initialMinutes={300} initialSeconds={0} />
        </div>
    )
}

export default Offer;