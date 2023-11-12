import { Outlet } from "react-router-dom"
import Header from "./Header"

function Navigation() {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <Outlet/>
    </div>
  )
}

export default Navigation