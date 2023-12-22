import {FaRegFile} from "react-icons/fa"

function NothingSelected() {
  return (
    <div className=" flex items-center gap-2 bg-red-200 text-lg font-semibold w-fit px-5 py-2 border-l-8  rounded border-red-500 ">
        <p>Please Select A File To Upload</p>
        <FaRegFile/>
    </div>
  )
}

export default NothingSelected