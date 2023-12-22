import { deleteObject, getDownloadURL, listAll, ref,getMetadata } from "firebase/storage"
import { storage } from "../../../../firebase/firebase"
import {  useContext, useEffect, useState } from "react"
import Offline from "../../../others/Offline"
import Deleted from "../../../others/Deleted"
import { Context } from "../../../../contexts/ContextFile"

function AdminHome() {

  const [imagesTest, setImagesTest] = useState([])
  const [offlineTrigger, setOfflineTrigger] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [deleting, setDeleting] = useState("Deleting...")
  const {setLengthOfUploads}=useContext(Context)
  
  function handleDelete(url){
    if(navigator.onLine){
      const urlRef=ref(storage,url)
      setDeleting("Deleting...")
      setDeleted(true)
      deleteObject(urlRef).then(function(){
        setDeleting("Deleted Successfully ")
        location.reload()
        setTimeout(function(){
          setDeleted(false);
        },2000)
      }).catch(function(err){
        console.error("ERR",err)
      })
    }else{
      setOfflineTrigger(true)
      setTimeout(function(){
        setOfflineTrigger(false)
      }, 5000);
    }
  }

  useEffect(function(){
    if(navigator.onLine){
      setOfflineTrigger(false)
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
    }else{
      setOfflineTrigger(true)
      setTimeout(function(){
        setOfflineTrigger(false)
      }, 5000);
    }    
  },[offlineTrigger])

  return (
    <div className=" px-5 py-2 my-5 ">
       <div className={`fixed top-2 left-1 transition-2000 transition-all ${deleted?' translate-x-0':' -translate-x-80'}`}>
          <Deleted deleting={deleting}/>
       </div>
       <div className={` fixed top-2 left-0 transition-2000 transition-all ${offlineTrigger?' translate-x-0':' -translate-x-80'}`}>
        <Offline/>
      </div>
      <div>
      {imagesTest.length===0
          ?<p className=" text-center font-semibold text-lg">No File Uploaded</p>:
          <div className=" grid max-sm:flex max-sm:flex-col max-sm:items-center grid-cols-3 max-sm:gap-10  gap-6 ">
            {imagesTest.slice(0,Math.round(imagesTest.length/2)).map(function(each,index){
            return(
              <div key={index} className=" max-sm:my-1 my-3">
                  <img src={`${each.imgUploaded}`} alt="Events" className="   max-[450px]:w-72   max-sm:w-72 max-sm:h-72 h-64 w-full" loading={'lazy'} />
                  <p className=" py-2 px-1 text-sm "><span className=" font-semibold">Date of Upload: </span>{each.date}</p>
                  <p className=" py-2 px-1 text-sm "><span className=" font-semibold">Time: </span>{each.time}</p>
                  <button className=" bg-gray-200 py-1 px-2 rounded-sm font-semibold" onClick={function(){
                    handleDelete(each.imgUploaded)
                  }}>Delete Post</button>
              </div>
            )
          })}
          </div>
        }
      </div>
    </div>
  )
}
export default AdminHome     