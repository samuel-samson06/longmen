import { NavLink } from "react-router-dom"
import {RxHamburgerMenu} from "react-icons/rx"
import logo from "../../long_men_images/longMenLogoCropped2.png"
import { useContext } from "react"
import { Context } from "../../contexts/ContextFile";

function Header() {
  // const [navBarTrigger, setNavBarTrigger] = useState(false);
  const {navBarTrigger,setNavBarTrigger}=useContext(Context)
  function handleVerticalNavigation(){
    setNavBarTrigger(!navBarTrigger)
    // alert(navBarTrigger)
  }
  function handleClose(){
    setNavBarTrigger(false)
  }

  return (
    <>
        {/* Vertical Navigation */}
          <nav className={` ${navBarTrigger?'flex':'hidden'} h-screen md:hidden  flex-col g  w-screen fixed bg-black uppercase font-semibold text-white`}>
            <div className="flex items-center p-5  w-screen bg-black">
              <img src={logo} loading={"lazy"} className=" max-[420px]:w-16 max-sm:w-28 max-md:w-32 w-44" alt="Long Men Logo" />
              <button type="button" className=" text-4xl absolute  right-10" onClick={handleClose}>×</button><br />
            </div>
            <div className=" px-5 py-5 flex flex-col gap-10">
              <NavLink onClick={handleClose} to={"/"} className={" a border-b-[1px] px-3 max-sm:text-sm  py-4 border-gray-300"}>Home</NavLink>
              <NavLink onClick={handleClose} to={"/about"} className={"a border-b-[1px] px-3 max-sm:text-sm  py-4 border-gray-300"}>About</NavLink>
              <NavLink onClick={handleClose} to={"/events"} className={"a border-b-[1px] px-3 max-sm:text-sm  py-4 border-gray-300"}>Events</NavLink>
              <NavLink onClick={handleClose} to={"/contact"} className={"a border-b-[1px] px-3 max-sm:text-sm  py-4 border-gray-300"}>Contact</NavLink>
            </div>
          </nav>
      <div>
          {/* Horizontal Navigation */}
          <header className=" bg-gray-700 px-6 py-4 flex justify-between items-center">
            <NavLink to={"/"} className={" a  hover:text-[16.5px] transition-all"}><img src={logo} loading={"lazy"} className=" max-[420px]:w-28 max-sm:w-36 max-md:w-40 w-44" alt="Long Men Logo" /></NavLink>
            
            <nav className={` max-sm:hidden max-md:hidden uppercase font-semibold text-white flex gap-10`}>
              <NavLink to={"/"} className={" a  hover:text-[16.5px] transition-all"}>Home</NavLink>
              <NavLink to={"/about"} className={"a  hover:text-[16.5px] transition-all"}>About</NavLink>
              <NavLink to={"/events"} className={"a  hover:text-[16.5px] transition-all"}>Events</NavLink>
              <NavLink to={"/contact"} className={"a  hover:text-[16.5px] transition-all"}>Contact</NavLink>
            </nav>
            <RxHamburgerMenu onClick={handleVerticalNavigation} className=" max-[420px]:text-xl max-md:block hidden text-white text-2xl"/>
          </header>
      </div>
    </>
  )
}

export default Header