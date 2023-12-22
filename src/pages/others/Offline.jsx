import { RiWifiOffLine } from "react-icons/ri"

function Offline() {
  return (
    <div className=" flex items-center gap-2 bg-red-200 text-lg font-semibold w-fit px-5 py-2 border-r-8  rounded border-red-500 ">
      <p>You are Currently Offline</p>
      <RiWifiOffLine/>
  
    </div>
  )
}

export default Offline