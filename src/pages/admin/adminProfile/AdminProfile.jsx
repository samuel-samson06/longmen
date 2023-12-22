import { useContext, useEffect, useState } from "react"
import image from "../../../long_men_images/longMenLogo.jpg"
import { today } from "../javaScriptFolder/date"
import { Context } from "../../../contexts/ContextFile";
import { useNavigate } from "react-router-dom";

function AdminProfile() {  
  let date=new Date();
  const navigate=useNavigate()
  const {lengthOfUploads}=useContext(Context)
  const [time, setTime] = useState({hours:date.getHours(),minutes:date.getMinutes(),seconds:date.getSeconds()})
  
  useEffect(function(){
    const intervalFunction=setInterval(function(){
      const dateEffect=new Date();
      setTime(function(time){
        return {...time,hours:dateEffect.getHours(),minutes:dateEffect.getMinutes(),seconds:dateEffect.getSeconds()}
      })
    },1000)
    return function(){
      clearInterval(intervalFunction)
    }
  },[])

  function handleReturn(){
    navigate("/")
  }

  const {hours,minutes,seconds}=time
  return (
    <div>
        <section >
          <div className=" max-lg:w-full w-[90%] px-2">
            <img src={image} alt="Logmen Logo" className=" rounded-sm"  />
            <main className=" flex flex-col gap-4 font-[monospace] mt-8 border-t-2  border-gray-400 py-4">
              <p className=" max-md:text-lg text-xl font-bold">{today}</p>
              <p className="  font-semibold text-lg">{`${hours<10?`0${hours}`:hours}:${minutes<10?`0${minutes}`:minutes}:${seconds<10?`0${seconds}`:seconds}`}</p>
              <p className="  max-md:text-base text-xl font-black">Number of Upload&apos;s ({lengthOfUploads})</p>
              <p className=" text-lg font-black max-md:text-base">Email: <span className=" font-medium font-sans text-base">a.samuelsamson@gmail.com</span></p>
              <article className=" m font-medium text-sm">A cigar is as good as memories that you have when you smoked it. And, you know, we just don&apos;t make memories with cigars, we make memories with our friends, with our family, with our loved ones. And, you know, that&apos;s what life is all about</article>
              <button onClick={handleReturn} className=" bg-gray-700 text-white py-1 rounded font-semibold px-3 w-fit ">Logout</button>
              <p className=" text-center font-black">Longmen &copy;</p>
            </main>
          </div>
        </section>
    </div>
  )
}

export default AdminProfile
