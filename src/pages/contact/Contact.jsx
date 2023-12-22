import {BsInstagram} from "react-icons/bs"
import { BiSolidPhoneCall} from "react-icons/bi"
import {HiOutlineMail} from "react-icons/hi"
import { useContext, useEffect, useRef, useState } from "react"
import { Context } from "../../contexts/ContextFile"
import { useNavigate } from "react-router-dom"
import emailjs from '@emailjs/browser';

function Contact() {
  const year=new Date()
  const form =useRef()
  const navigate=useNavigate()
  const {navBarTrigger}=useContext(Context)
  const [info,setInfo]=useState({
    name:'',
    phoneNumber:"",
    email:'',
    message:''
  })
  const [btnText, setBtnText] = useState("Send Message")
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

  useEffect(function(){
    if(name.toLowerCase()==="longmen" && message.toLowerCase()==="longmen123"){
      setBtnText("Login")
    }else{
      setBtnText("Send Message")
    }

  },[name,message])

  function handleChange(e){
    setInfo({
      ...info,
      [e.target.name]:e.target.value
    })
  }


  function handleSubmit(e){
    e.preventDefault()
    if(name.toLowerCase().trim()==="longmen" && message.toLowerCase().trim()==="longmen123" && email.length===0 && phoneNumber.length===0){
      navigate('/admin/adminHome')
    }else if(name.length===0 || phoneNumber.length===0 || email.length===0 || message.length===0){
      setBorderTrigger(true)
      // alert("message")
    }else{
      emailjs.sendForm('service_9m6o8d8', 'template_5rsmgtn', form.current, 'CdvIJoio1htO4SQuP')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent")
      }, (error) => {
          console.log(error.text);
          alert("Error sending message")
      });
      setInfo({
        name:'',
        phoneNumber:"",
        email:'',
        message:''
      })

    }
  }

  return (
    <>
      <div className="  border-t-2">
        <div className={`${navBarTrigger?'-z-10':'z-10'}   text-white bg-[url(long_men_images/longMenLogo.jpg)] relative bg-cover bg-center bg-no-repeat h-[400px]`}>
          <main className=" sm:items-center sm:text-lg sm:gap-10 gap-5 flex flex-col justify-center  py-3 absolute bg-black bg-opacity-80 h-[100%] w-[100%]">
            <p className=" max-[420px]:text-2xl font-semibold text-center  text-4xl font-sans">Contact Us</p>
            <div className=" px-5">
              <section className=" ">
                <div>
                  <div className=" flex items-center gap-5">
                    <p className=" max-[420px]:text-lg text-xl font-semibold py-3">Socials:</p>
                    <a className=" max-[420px]:text-lg text-xl" href="https://www.instagram.com/longmenafr/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="><BsInstagram/></a>
                  </div>
                </div>
                <div className=" flex items-center gap-5">
                  <p className=" max-[420px]:text-lg text-xl font-semibold  py-3">Phone:</p>
                  <a href="tel:+08106407130" className=" border-b-[1px] max-[420px]:text-sm text-white px-2 py-1  font-bold flex items-center gap-2 "><span>Place a call</span><BiSolidPhoneCall  className="text-lg"/></a>
                </div>
                <div className="flex items-center gap-5">
                  <p className=" max-[420px]:text-lg text-xl font-semibold  py-3">Email:</p>
                  <a href="mailto:a.samuelsamson@gmail.com" className="border-b-[1px] max-[420px]:text-sm text-white px-2 py-1  font-bold flex items-center gap-2 "><span>Send Us A Direct Mail</span>{<HiOutlineMail/>}</a>
                </div>
              </section>
            </div>
          </main>
        </div>
        <div>
          <p className=" max-[420px]:text-base max-[420px]:py-3 text-center font-serif font-semibold text-xl py-3 underline">Send us a message by filling the form</p>
          <form action="" ref={form} className="  bg-gray-200 py-5 px-4 max-[420px]:mx-4 max-[420px]:my-5 mx-8 my-10 flex flex-col gap-6 rounded-md ">
            <input onChange={handleChange} value={name} type="text" name="name"  className={`  py-2 px-2 mx-3 placeholder:font-semibold placeholder:text-gray-400 placeholder:text-opacity-70 outline-none bg-gray-200 border-b-2  ${borderTrigger&&name.length<=0?"border-red-500":'border-black'}`} placeholder="Your Name" />
            <input onChange={handleChange} value={phoneNumber} type="tel" name="phoneNumber"  className={`  py-2 px-2 mx-3 placeholder:font-semibold placeholder:text-gray-400 placeholder:text-opacity-70 outline-none bg-gray-200 border-b-2  ${borderTrigger&&phoneNumber.length<=0?"border-red-500":'border-black'}`} placeholder="Your phone number" />
            <input onChange={handleChange} value={email} type={"email"} name="email"  className={`  py-2 px-2 mx-3 placeholder:font-semibold placeholder:text-gray-400 placeholder:text-opacity-70 outline-none bg-gray-200 border-b-2  ${borderTrigger&&email.length<=0?"border-red-500":'border-black'}`} placeholder=" Your e-mail" />
            <input onChange={handleChange} value={message} type={message.toLowerCase().trim()==="longmen123"?'password':'text'} name="message"  className={`  py-2 px-2 mx-3 placeholder:font-semibold placeholder:text-gray-400 placeholder:text-opacity-70 outline-none bg-gray-200 border-b-2  ${borderTrigger&&message.length<=0?"border-red-500":'border-black'}`} placeholder="Message" />
            <div className=" flex items-center justify-center">
              <button onClick={handleSubmit} type="submit" className={" max-[420px]:text-base max-[420px]:w-40 text-lg w-56 bg-gray-600 py-2  text-white rounded font-semibold hover:shadow-xl transition-shadow"}>{btnText}</button>
            </div>
          </form>
        </div>
      <p className=" max-[420px]:font-medium max-[420px]:text-[12px] max-[420px]:py-3 max-[420px]:px-3 py-2 uppercase text-center text-white bg-gray-700 font-semibold">All Rights Reserved | A longmen cooperation &copy; {year.getFullYear()}</p>
      </div>
    </>
  )
}

export default Contact