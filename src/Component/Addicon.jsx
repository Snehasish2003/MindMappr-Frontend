import { Plus } from "lucide-react"

const Addicon = ()=>{
    return(
        <div className="fixed bg-primary bottom-5 z-60 flex justify-center items-center cursor-pointer  shadow-xl/20 hover:shadow-xl/30 hover:w-20 hover:h-20  rounded-full w-18 h-18 right-5">
            <Plus size={30} className="text-white" />
        </div>
    )
}
export default Addicon;