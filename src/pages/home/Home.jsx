import { Link } from "react-router-dom"
import video from "../../long_men_images/lastLongmenEvent.mp4"
import flyer from "../../long_men_images/lastEventFlyer.webp"
// import longMen from "../../long_men_images/both.jpg"
import el from "../../long_men_images/elvis.jpg"
import lotana from "../../long_men_images/lotana.jpg"
import art from "../../long_men_images/art.jpg"
import { useContext } from "react"
import { Context } from "../../contexts/ContextFile"


function Home() {
  const year=new Date()
  const {navBarTrigger}=useContext(Context)

  return (
    <>
      <div className="  border-t-2">

        <div className={` ${navBarTrigger?'-z-10':'z-10'} max-[420px]:h-[300px] max-[420px]:w-screen relative bg-[url(long_men_images/both.jpg)] bg-cover bg-center bg-no-repeat  h-[500px]`}>
          <main className=" max-[420px]:h-[300px] max-[420px]:w-screen  w-[100%] h-[100%] bg-opacity-70 text-white bg-black absolute flex items-center">
            <aside className=" max-[420px]:px-10 max-sm:px-32 max-[440px]:px-12 px-40">
              <p className=" max-[420px]:font-medium max-[420px]:text-2xl max-[440px]:text-3xl max-md:text-4xl text-7xl font-bold font-family">We Are <br /><span>Longmen!</span></p>
              <p className=" max-[420px]:font-normal max-[420px]:text-sm max-[440px]:text-[13px] max-md:text-lg text-xl font-medium  my-3 italic">Exclusive Lifestyle & Events, Strategic Brand Partnerships, Private Club Membership<span>& </span>Events <span className=" max-[420px]:text-base text-lg not-italic">Brand!</span></p>
              <Link to={"about"} className={" max-[420px]:text-base max-[420px]:font-normal max-sm:text-lg text-2xl bg-gray-800 text-white  py-1 px-2 rounded font-semibold"}>About →</Link>
            </aside>
          </main>
        </div>
        <div className="  py-5">
          <p className=" max-[420px]:text-xl max-[420px]:py-1 max-md:text-2xl max-md:py-2 text-center text-3xl font-bold  py-3">Focus</p>
          <p className=" max-[420px]:text-sm max-[420px]:py-1 max-[420px]:my-2 max-[420px]:px-3 max-md:my-2 max-md:py-2 max-md:px-5 text-center text-lg py-4 my-4 ">At <span className=" font-bold">Longmen</span>, we celebrate the finer things in life – the art of savoring a perfectly rolled cigar, <br /> the warmth of a well-aged whisky, and the joy of shared experiences. <br /> Our passion lies in curating exceptional moments for aficionados, connoisseurs, and seekers of refined pleasures.</p>
          <section className=" -z-40 max-lg:gap-16 max-[420px]:gap-12 max-[420px]:justify-center  max-md:flex-col my-4 flex justify-evenly items-center">
            <main className="-z-40 rounded-md transition-all hover:text-lg relative overflow-hidden">
              <img className=" max-md:w-96 max-[420px]:w-64 w-80" src={el} alt="" />
              <div className=" absolute bg-black bg-opacity-60 top-0 left-0 w-full h-full">
                <h1 className=" text-white text-center m-12 font-semibold py-2 uppercase italic">Cigars</h1>
              </div>
            </main>
            <main className="-z-40 rounded-md transition-all hover:text-lg relative overflow-hidden">
              <img className=" max-[420px]:w-64 max-md:w-80 w-64" src={lotana} alt=""  />
              <div className=" absolute bg-black bg-opacity-60 top-0 left-0 w-full h-full">
                <h1 className=" text-white text-center font-semibold m-12 py-2 italic uppercase">Whisky</h1>
              </div>
            </main>
            <main className="-z-40 rounded-md transition-all hover:text-lg relative overflow-hidden">
              <img className=" max-md:w-96 max-[420px]:w-64 w-80" src={art} alt="" />
              <div className=" absolute bg-black bg-opacity-60 top-0 left-0 w-full h-full">
                <h1 className=" text-white text-center font-semibold m-12 py-2 italic">ART</h1>
              </div>
            </main>
          </section>
        </div>
      </div>
      <footer className=" bg-gray-200 py-5">
        <p className=" max-[420px]:text-xl max-md:text-2xl  text-center upper font-semibold text-3xl font-serif">Previous Event</p>
        <div className=" flex items-center justify-evenly py-5">
          <video src={video} controls  className="  max-[450px]:w-24 max-[420px]:w-24 max-md:w-40 w-60 rounded"/>
          <img src={flyer} alt="Last Event" className=" max-[450px]:w-36 max-[420px]:w-40 max-md:w-72 w-96" />
        </div>
      </footer>
      <p className=" max-[420px]:font-medium max-[420px]:text-[12px] max-[420px]:py-3 max-[420px]:px-3 py-2 capitalize text-center text-white bg-gray-700 font-semibold">All Rights Reserved | A longmen co-operation &copy; {year.getFullYear()}</p>
    </>
  )
}

export default Home