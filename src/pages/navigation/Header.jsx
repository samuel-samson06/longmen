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
          <nav className={` ${navBarTrigger?'flex':'hidden'} h-screen bg-opacity-95 md:hidden  flex-col gap-10 px-5 py-5 w-screen fixed bg-black uppercase font-semibold text-white`}>
            <button type="button" className=" text-4xl absolute  right-5" onClick={handleClose}>×</button><br />
            <NavLink onClick={handleClose} to={"/"} className={" a border-b-2 py-3 border-gray-300 hover:text-[16.5px] transition-all"}>Home</NavLink>
            <NavLink onClick={handleClose} to={"/about"} className={"a border-b-2 py-3 border-gray-300 hover:text-[16.5px] transition-all"}>About</NavLink>
            <NavLink onClick={handleClose} to={"/events"} className={"a border-b-2 py-3 border-gray-300 hover:text-[16.5px] transition-all"}>Events</NavLink>
            <NavLink onClick={handleClose} to={"/contact"} className={"a border-b-2 py-3 border-gray-300 hover:text-[16.5px] transition-all"}>Contact</NavLink>
          </nav>
      <div>
          {/* Horizontal Navigation */}
          <header className=" bg-gray-700 px-6 py-4 flex justify-between items-center">
            <img src={logo} loading={"lazy"} className=" max-[420px]:w-28 max-sm:w-36 max-md:w-40 w-44" alt="Long Men Logo" />
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