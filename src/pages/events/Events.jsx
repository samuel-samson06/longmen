import event1 from "../../long_men_images/event1.webp"
import event2 from "../../long_men_images/event2.jpg"
import event3 from "../../long_men_images/event3.jpg"
import event4 from "../../long_men_images/event4.jpg"
import { getDownloadURL, listAll, ref,getMetadata } from "firebase/storage"
import { storage } from "../../firebase/firebase"
import {  useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/ContextFile"


function Events() {
  const year=new Date()
  const [imagesTest, setImagesTest] = useState([])
  const {setLengthOfUploads}=useContext(Context)

  

  useEffect(function(){
    if(navigator.onLine){
      const imageRef=ref(storage,"images/")
      listAll(imageRef).then(function(response){
        setLengthOfUploads(response.items.length);
        response.items.forEach(function(item){
          const timeOfUpload=[]
          const dateOfUpload=[]
          getMetadata(item).then(function(date){
            const day= new Date(date.timeCreated).toLocaleDateString("en-US",{weekday:'short'});
            const month=new Date(date.timeCreated).toLocaleDateString("en-US",{month:'short'})
            const dateToday=new Date(date.timeCreated).toLocaleDateString("en-US",{day:'numeric'})
            const year=new Date(date.timeCreated).toLocaleDateString("en-US",{year:'numeric'})
            const full=`${day} ${dateToday} ${month} ${year}`
            timeOfUpload.push(...timeOfUpload,new Date(date.timeCreated).toLocaleTimeString("en-US",{timeStyle:'short'}))
            dateOfUpload.push(...dateOfUpload,full)
          })
          getDownloadURL(item).then(function(url){        
           setImagesTest(function(prev){
            return [...prev ,{imgUploaded:url,time:timeOfUpload[0],date:dateOfUpload}]
           })
          })
        })
      }           
      ).catch(function(err){
        console.log("Error:",err);
      })
    }   
  },[setLengthOfUploads])

  return (
    <>
      <div className=" -z-40 relative bg-[url(long_men_images/event.jpg)] max-[420px]:h-[400px] h-[500px] bg-cover bg-center bg-no-repeat  rounded-b-2xl border-t-2">
        <div className=" absolute bg-black w-[100%] h-[100%] bg-opacity-70 text-white flex flex-col justify-center max-md:gap-6 max-[420px]:gap-8 max-[420px]:px-5 gap-14">
          <p className=" max-sm:text-2xl max-md:text-3xl max-[420px]:text-xl text-center text-4xl font-semibold font-serif">Event&apos;s</p>
          <p className=" max-md:text-base max-md:px-5 max-[420px]:text-sm text-center font-semibold text-lg">
            We&apos;re more than a brand – we&apos;re a lifestyle<br />
            Join our club of connoisseurs. Share stories, attend masterclasses, and connect with fellow enthusiasts. <br /> We&apos;re more than a brand – we&apos;re a lifestyle
            Legacy: <br /> We honor the legacy of those who came before us – the cigar rollers, the distillers, the artists. Their passion fuels ours.
          </p>
        </div>
      </div>
      <div className=" py-8 bg-gray-200">
        <p className=" underline text-center font-semibold font-serif text-3xl max-[420px]:text-xl">Previous Event&apos;s</p>
        <main className="  max-lg:flex-col items-center max-[420px]:flex-col flex gap-7 justify-evenly py-7 px-7">
          <section><img src={event1} alt="Event" loading="lazy" className=" max-lg:w-[400px] max-lg:h-[400px] max-md:w-80 max-md:h-96 max-[420px]:w-60 max-[420px]:h-72 w-72 h-80" /></section>
          <section><img src={event2} alt="Event" loading="lazy" className=" max-lg:w-[400px] max-lg:h-[400px] max-md:w-80 max-md:h-96 max-[420px]:w-60 max-[420px]:h-72 w-72 h-80" /></section>
          <section><img src={event3} alt="Event" loading="lazy" className=" max-lg:w-[400px] max-lg:h-[400px] max-md:w-80 max-md:h-96 max-[420px]:w-60 max-[420px]:h-72 w-72 h-80" /></section>
          <section><img src={event4} alt="Event" loading="lazy" className=" max-lg:w-[400px] max-lg:h-[400px] max-md:w-80 max-md:h-96 max-[420px]:w-60 max-[420px]:h-72 w-72 h-80" /></section>
        </main>
        <div className=" px-8 py-2 my-5 ">      
       <div>
        {imagesTest.length!==0 &&
            <main>
              <p className=" underline text-center font-semibold font-serif text-3xl max-[420px]:text-xl">Recent Post&apos;s</p>
              <div className=" py-7 grid max-sm:flex max-sm:flex-col max-sm:items-center grid-cols-4 max-sm:gap-10  gap-6 ">
              {imagesTest.map(function(each,index){
              return(
                <div key={index} className=" max-sm:my-1 my-3">
                    <img src={`${each.imgUploaded}`} alt="Events" className=" max-lg:w-[400px] max-lg:h-[400px] max-md:w-80 max-md:h-96 max-[420px]:w-60 max-[420px]:h-72 w-72 h-80" loading={'lazy'} />
                    <p className=" py-2 px-1 text-sm "><span className=" font-semibold">Posted: </span>{each.date}</p>
                </div>
              )
            })}
        </div>
            </main>
            
        }
      </div>
    </div>

        <p className=" max-[420px]:text-base max-[420px]:px-5 font-semibold text-xl text-center py-8 max-md:text-lg">Our whisky is distilled by masters who honor tradition. Our events are curated with meticulous care. <br />
    Step into our world. The hum of conversation, the clink of glasses, the aroma of tobacco – it&apos;s all here. <br />At Longmen, we celebrate life&apos;s symphony.
    Cheers to the art of living!* 🥃🪘🎨🌟</p>
      </div>
      <p className=" max-[420px]:font-medium max-[420px]:text-[12px] max-[420px]:py-3 max-[420px]:px-3 py-2 capitalize text-center text-white bg-gray-700 font-semibold">All Rights Reserved | A longmen co-operation &copy; {year.getFullYear()}</p>
    </>
  )
}

export default Events





