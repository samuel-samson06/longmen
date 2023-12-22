import belvine from "../../long_men_images/belvine.jpg"
import congress from "../../long_men_images/congress.jpg"


function About() {
  const year=new Date()

  return (
    <>
      <div className=" rounded-b-2xl border-t-2">
        <main className=" -z-40 relative bg-[url(long_men_images/aboutBg.jpg)] h-[500px] bg-cover bg-center bg-no-repeat">
          <article className=" absolute bg-black w-[100%] h-[100%] bg-opacity-70 text-white font-semibold text-2xl text-center flex justify-center items-center font-serif leading-[40px] max-[420px]:leading-[25px] max-[420px]:text-sm max-[420px]:px-4 max-md:px-6 max-sm:text-lg max-md:text-xl">
            <p>At Longmen, we believe that life is best savored slowly, <br /> like a well-aged whisky or a hand-rolled cigar. <br /> Our brand is an ode to the finer things – the artistry of a perfectly crafted smoke,<br /> the warmth of a crystal tumbler, and the magic of shared moments.</p><br />
          </article>
        </main>
      </div>
      <div className=" border-t-2 border-black mx-2 py-10">
        <p className=" underline text-center text-3xl font-semibold font-sans max-[420px]:text-xl max-md:text-2xl">What We Offer</p>
        <article className=" font-semibold py-4 px-8 border-b-2 border-black max-[420px]:text-sm max-[420px]:px-4 max-md:px-6">
          <ul>
            <li className=" max-md:py-4 max-[420px]:py-2 py-1">1.) Cigars: Our humidors house a curated selection of cigars – from earthy Nicaraguans to spicy Dominicans. Each cigar tells a tale of terroir, tradition, and taste. Whether you&apos;re a seasoned aficionado or a curious novice, our collection invites you to explore the nuances of tobacco leaves.</li>
            <li className=" max-md:py-4 max-[420px]:py-2 py-1">2.) Whisky: Raise your glass to amber sunsets. Our whisky library boasts single malts, bourbons, and rare blends. Sip slowly, let the flavors unfold  vanilla, oak, and a hint of smokiness. Join us for tastings, where every drop has a story to tell.</li>
            <li className=" max-md:py-4 max-[420px]:py-2 py-1">3.) Art: Our walls breathe with creativity. Local artists adorn our space with their masterpieces  abstract strokes, vivid landscapes, and sculptures that provoke thought. Art and cigars share a soul – both ignite emotions and invite contemplation.</li>
            <li className=" max-md:py-4 max-[420px]:py-2 py-1 pb-5">4.) Events: We orchestrate soirées that linger in memory. Picture candlelit terraces, jazz notes, and laughter. Our events blend cigars, whisky, and art seamlessly. Whether it&apos;s a gallery opening, a private tasting, or a charity auction, we create experiences that transcend time.</li>
          </ul>

          </article>
      </div>
      <div>
        <p className=" max-md:text-2xl max-[420px]:text-xl my-2 text-center font-semibold text-3xl underline">Brand&apos;s</p>
        <section className=" bg-gray-200 rounded-t-md items-center py-9 flex flex-col gap-4 max-md:gap-12">
          <div className=" max-md:flex-col max-[420px]:flex-col justify-end flex items-center gap-7">
            <article className=" max-md:text-center max-[420px]:text-center">
              <p className=" max-md:text-lg max-[420px]:text-base text-xl font-semibold font-serif ">The <span className="max-md:text-xl text-3xl">Balvenie</span></p>
              <p className=" max-md:font-normal max-[420px]:text-sm max-[420px]:font-normal font-semibold">Single malt scotch whisky from William Grant & Sons.</p>
              <a href="https://www.instagram.com/thebalvenie/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" className=" text-blue-600 underline">Link To Instagram Profile</a>
            </article>
            <img src={belvine} alt="" className=" max-md:w-80 max-[420px]:w-60 w-72" />
          </div>
          <div className=" max-md:flex-col-reverse max-[420px]:flex-col-reverse items-center justify-start flex gap-7 ">
            <img src={congress} alt="" className=" max-md:w-96 max-[420px]:w-72 w-80" />
            <article className=" max-md:text-center">
              <p className=" max-md:text-xl text-3xl font-semibold font-serif ">Congressman Cigar </p>
              <p className=" max-md:font-normal max-[420px]:font-normal max-[420px]:text-sm font-semibold">New Generation of Good Taste. 🥃Handmade Dominican Cigar.</p>
              <a href="https://www.instagram.com/congressmancigar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" className=" text-blue-600 underline">Link To Instagram Profile</a>
            </article>
          </div>
        </section>
      </div>
      <p className=" max-[420px]:font-medium max-[420px]:text-[12px] max-[420px]:py-3 max-[420px]:px-3 py-2 uppercase text-center text-white bg-gray-700 font-semibold">All Rights Reserved | A longmen cooperation &copy; {year.getFullYear()}</p>
    </>
  )
}

export default About