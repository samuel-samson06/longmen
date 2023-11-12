import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navigation from "./pages/navigation/Navigation"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Events from "./pages/events/Events"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="events" element={<Events/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>    
  )
}

export default App