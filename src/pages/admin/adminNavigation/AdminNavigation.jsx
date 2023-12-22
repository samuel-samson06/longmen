import { NavLink } from "react-router-dom"

function AdminNavigation() {
  return (
    <div>
      <nav>
        <ul className=" max-lg:pt-10 max-lg:pb-1 flex text-lg font-semibold justify-evenly">
          <NavLink to={"adminHome"} className={" act"}>Home</NavLink>
          <NavLink to={"adminUpload"} className={" act"}>Upload</NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default AdminNavigation
