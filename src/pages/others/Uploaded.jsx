import {MdUploadFile} from "react-icons/md"
function Uploaded() {
  return (
    <div className=" flex items-center gap-2 bg-green-200 text-xl border-x-4  border-green-500 font-semibold w-fit px-4 py-1  text-green-700 rounded ">
        <p>Upload Successful </p>
        <MdUploadFile/>
    </div>
  )
}

export default Uploaded