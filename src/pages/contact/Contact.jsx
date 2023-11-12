import {BsInstagram} from "react-icons/bs"
import {BiPhone} from "react-icons/bi"
import {HiOutlineMail} from "react-icons/hi"

import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

function Contact() {
  const year=new Date()
  const [info,setInfo]=useState({
    name:'',
    phoneNumber:"",
    email:'',
    message:''
  })
  const [borderTrigger, setBorderTrigger] = useState(false)
  const {name,phoneNumber,email,message}=info


  useEffect(function(){
    const timer=setTimeout(function(){
      return setBorderTrigger(false)
    },3000)

    return function(){
      clearTimeout(timer)
    }
  },[borderTrigger])

  function handleChange(e){
    setInfo({
      ...info,
      [e.target.name]:e.target.value
    })
  }
  function handleSubmit(e){
    e.preventDefault();
    if(name.length===0 || phoneNumber.length===0 || email.length===0 || message.length===0){
      setBorderTrigger(true)
    }else{
      setBorderTrigger(false)
      alert("bubby")
    }
  }

  return (
    <>
      <div className="  border-t-2">
        <div className=" -z-40 text-center text-white bg-[url(long_men_images/longMenLogo.jpg)] relative bg-cover bg-center bg-no-repeat h-[400px]">
          <main className=" py-3 absolute bg-black bg-opacity-90 h-[100%] w-[100%]">
            <p className=" max-[420px]:text-2xl font-semibold  text-4xl font-sans">Contact Us</p>
            <div className=" ">
              <p className=" max-[420px]:text-sm">Contact Us Through The following</p>
              <section className=" flex items-center flex-col gap-4">
                <div >
                  <p className=" max-[420px]:text-lg text-xl font-semibold underline py-3">Socials</p>
                  <aside className=" flex items-center justify-center gap-10 text-2xl">
                    <NavLink to={"https://www.instagram.com/longmenafr/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="}><BsInstagram/></NavLink>
                    {/* <NavLink to={""}><FaThreads/></NavLink> */}
                  </aside>
                </div>
                <div>
                  <p className=" max-[420px]:text-lg text-xl font-semibold underline py-3">Phone</p>
                  <a href="tel:+08106407130" className=" max-[420px]:text-sm flex items-center gap-2 bg-gray-200 text-black px-2 py-1 rounded font-bold"><span>Place a call</span>{<BiPhone/>}</a>
                </div>
                <div>
                  <p className=" max-[420px]:text-lg text-xl font-semibold underline py-3">Email</p>
                  <a href="mailto:a.samuelsamson@gmail.com" className=" max-[420px]:text-sm flex items-center gap-2 bg-gray-200 text-black px-2 py-1 rounded font-bold"><span>Send Us A Direct Mail</span>{<HiOutlineMail/>}</a>
                </div>
              </section>
            </div>
          </main>
        </div>
        <div>
          <p className=" max-[420px]:text-base max-[420px]:py-3 text-center font-serif font-semibold text-xl py-3 underline">Send us a message by filling the form</p>
          <form action="" className="  bg-gray-200 py-5 px-4 max-[420px]:mx-4 max-[420px]:my-5 mx-8 my-10 flex flex-col gap-6 rounded-md ">
            <input onChange={handleChange} value={name} type="text" name="name" id="" className={` rounded-t-md py-2 px-2 mx-3 placeholder:font-semibold placeholder:text-gray-400 placeholder:text-opacity-70 outline-none bg-gray-200 border-b-2  ${borderTrigger&&name.length<=0?"border-red-500":'border-black'}`} placeholder="Your Name" />
            <input onChange={handleChange} value={phoneNumber} type="tel" name="phoneNumber" id="" className={` rounded-t-md py-2 px-2 mx-3 placeholder:font-semibold placeholder:text-gray-400 placeholder:text-opacity-70 outline-none bg-gray-200 border-b-2  ${borderTrigger&&phoneNumber.length<=0?"border-red-500":'border-black'}`} placeholder="Your phone number" />
            <input onChange={handleChange} value={email} type={"email"} name="email" id="" className={` rounded-t-md py-2 px-2 mx-3 placeholder:font-semibold placeholder:text-gray-400 placeholder:text-opacity-70 outline-none bg-gray-200 border-b-2  ${borderTrigger&&email.length<=0?"border-red-500":'border-black'}`} placeholder=" Your e-mail" />
            <input onChange={handleChange} value={message} type={"text"} name="message" id="" className={` rounded-t-md py-2 px-2 mx-3 placeholder:font-semibold placeholder:text-gray-400 placeholder:text-opacity-70 outline-none bg-gray-200 border-b-2  ${borderTrigger&&message.length<=0?"border-red-500":'border-black'}`} placeholder="Message" />
            <div className=" flex items-center justify-center">
              <button onClick={handleSubmit} type="submit" className={" max-[420px]:text-base max-[420px]:w-40 text-lg w-56 bg-gray-600 py-2  text-white rounded font-semibold hover:shadow-xl transition-shadow"}>Send Message</button>
            </div>
          </form>
        </div>
      {/* <p className=" py-2 uppercase text-center text-white bg-gray-700 font-semibold">All Rights Reserved | A longmen cooperation &copy; {year.getFullYear()}</p> */}
      <p className=" max-[420px]:font-medium max-[420px]:text-[12px] max-[420px]:py-3 max-[420px]:px-3 py-2 uppercase text-center text-white bg-gray-700 font-semibold">All Rights Reserved | A longmen cooperation &copy; {year.getFullYear()}</p>
      </div>
    </>
  )
}

export default Contact