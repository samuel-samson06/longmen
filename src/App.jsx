import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navigation from "./pages/navigation/Navigation"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Events from "./pages/events/Events"
import AdminLayout from "./pages/admin/AdminLayout"
import AdminHome from "./pages/admin/adminPages/home/AdminHome"
import AdminUpload from "./pages/admin/adminPages/upload/AdminUpload"
import {Context} from "./contexts/ContextFile"
import { useState } from "react"

function App() {

  const [navBarTrigger, setNavBarTrigger] = useState(false);
  const [imageUpload, setImageUpload] = useState(null)
  const [lengthOfUploads, setLengthOfUploads] = useState(0)
  const [imageList, setImageList] = useState([])

  
  const value={lengthOfUploads, setLengthOfUploads,navBarTrigger,setNavBarTrigger,imageUpload,setImageUpload,imageList,setImageList}

  return (
    <Context.Provider value={value} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="events" element={<Events/>}/>
            <Route path="contact" element={<Contact/>}/>
          </Route>
          
          <Route path="admin" element={<AdminLayout/>}>
            <Route path="adminHome" index element={<AdminHome/>}/>
            <Route path="adminUpload" element={<AdminUpload/>}/>
          </Route>
        </Routes>
      </BrowserRouter>    
    </Context.Provider>
  )
}

export default App