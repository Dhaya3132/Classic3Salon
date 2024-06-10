import HeadLine from "./HeadLine";

function Head() {
    return (
        <div className="flex justify-center items-center gap-28 p-14 
        Mobile-S:flex-col Mobile-S:justify-center Mobile-S:items-center Mobile-S:p-3 Mobile-S:gap-10 Mobile-S:mt-5
        Mobile-M:flex-col Mobile-M:justify-center Mobile-M:items-center Mobile-M:p-5 Mobile-M:gap-10 Mobile-M:mt-5
        Mobile-L:flex-col Mobile-L:justify-center Mobile-L:items-center Mobile-L:p-10 Mobile-L:gap-10 Mobile-L:mt-5">
            <HeadLine></HeadLine>
            <div>
                <img src="./src/assets/aarx0g3at.png" className="w-96 h-96 Mobile-S:w-52 Mobile-S:h-52 Mobile-M:w-56 Mobile-M:h-56 Mobile-L:w-56 Mobile-L:h-56"/>
            </div>
        </div>
    )
}

export default Head;