import { useContext, useState } from "react"
import {TiFolderOpen} from "react-icons/ti"
import { Context } from "../../../../contexts/ContextFile"
import { storage } from "../../../../firebase/firebase"
import { v4 } from "uuid"
import { ref, uploadBytes } from "firebase/storage"
import NothingSelected from "../../../others/NothingSelected"
import Offline from "../../../others/Offline"
import Uploaded from "../../../others/Uploaded"
import { useNavigate } from "react-router-dom"

function AdminUpload() {
  const [fileImage, setFileImage ] = useState('')
  const navigate=useNavigate()
  const [selectFileTrigger, setSelectFileTrigger] = useState(false)
  const [offlineTrigger, setOfflineTrigger] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(false)
  const {imageUpload,setImageUpload}=useContext(Context)

  function handleImage(e){
    setFileImage(URL.createObjectURL(e.target.files[0]))
    setImageUpload(e.target.files[0])
  }

  function handleUpload(e){
    e.preventDefault()
    if(imageUpload===null && fileImage===''){
      setSelectFileTrigger(true)
      setTimeout(function(){
        setSelectFileTrigger(false)
      }, 5000);
      
    }
    else{
      if(navigator.onLine){
        const imageRef=ref(storage,`images/${imageUpload.name+v4()}`)
        setUploading(true)
        uploadBytes(imageRef,imageUpload).then(function(upload){
          setUploaded(true)
          setTimeout(function(){
            setUploaded(false)
          }, 5000);
          setTimeout(function(){
            navigate('/admin/adminHome')
          },1000)
          setUploading(false)
          setImageUpload(null);
          setFileImage("")
        })
      }else{
        setOfflineTrigger(true)
        setTimeout(function(){
          setOfflineTrigger(false)
        }, 5000);
      }
      
    }

  }

  function handleCancelUpload(e){
    e.preventDefault()
    setFileImage('')
    setImageUpload(null)
  }

  return (
    <div className="">
      
      <div className={` fixed top-2 right-0 transition-2000 transition-all ${selectFileTrigger?' -translate-x-2':' translate-x-96'}`}>
        <NothingSelected/>
      </div>
      <div className={` fixed top-2 left-0 transition-2000 transition-all ${offlineTrigger?' translate-x-0':' -translate-x-96'}`}>
        <Offline/>
      </div>
      <div className={`fixed top-2 left-1 transition-2000 transition-all ${uploaded?' translate-x-0':' -translate-x-96'}`}>
        <Uploaded/>
      </div>
      
      <div className=" bg-gray-200 border-[2px] border-black rounded-md max-sm:mx-3  mx-4 my-10 py-10 px-5  border-dashed flex flex-col items-center gap-3 max-sm:gap-6 ">
        <div>
          {fileImage===''?<TiFolderOpen className=" text-5xl font-light "/>:<img src={fileImage} alt={fileImage} className=" h-48 rounded-md" />}
        </div>
        <div className=" flex flex-col items-center testCss ">
          <p className=" max-[362px]:text-sm max-[432px]:text-sm font-[monospace] text-lg font-medium">Select the file you would like to upload</p><br />
          <input onChange={handleImage} accept="image/*"  type="file"  name="" id="" className=" max-sm:file:mx-5 file:px-4 file:py-2 file:bg-gray-300 file:border-none file:rounded-md  file:mr-4 file:border-[1px]   file:p-1"/>
        </div>
        {uploading&& <div className=" font-semibold text-lg font-serif animate-pulse">Uploading...</div>}
      </div>
      <form action="" className={`  justify-center flex ${fileImage===""?'flex-col':'flex-row'} gap-2 mx-5 my-5 py-5 px-3`}>
        <button type="submit" disabled={uploading} onClick={handleUpload} className={`${uploading?'bg-blue-100':'bg-blue-400'} max-lg:text-lg max-sm:mx-5 max-[420px]:py-2  py-2 max-sm:px-7 px-10   rounded-md text-white font-semibold`}>Upload</button>
        <button type="submit" disabled={uploading} onClick={handleCancelUpload} className={` ${fileImage===""?"hidden":''} max-lg:text-lg max-sm:mx-5 max-[420px]:py-2 ${uploading?'bg-gray-200':'bg-gray-400'} py-2 max-sm:px-7 px-10  rounded-md text-black font-semibold`}>Cancel</button>
      </form>
    </div>
  )
}
export default AdminUpload
