import { Outlet } from "react-router-dom"
import AdminNavigation from "./adminNavigation/AdminNavigation"
import AdminProfile from "./adminProfile/AdminProfile"

function AdminLayout() {
  
  return (
    <div className="flex max-lg:flex-col">
      {/* LEFT HAND SIDE */}
      <section className=" items-center bg-slate-300 max-lg:h-fit h-screen max-lg:w-[100%]  w-[40%] py-4 px-2">
        <AdminProfile/>
      </section>
      {/* LEFT HAND SIDE */}
      <section className=" max-lg:w-full w-[60%] max-lg:h-fit h-screen overflow-scroll">
        <div>
          <AdminNavigation/>
          <Outlet/>
        </div>
      </section>
    </div>
  )
}

export default AdminLayout
