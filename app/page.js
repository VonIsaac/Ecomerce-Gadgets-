//import Image from "next/image";
import Link from "next/link";
//import imageSample from "@/assets/headerImage.png"
import ImageSlider from "@/components/images/image-slide";
import classes from "./page.module.css"
export default function Home() {
  return (
    <>
    <header className = " text-white mt-2 mb-10">
      <div className = " flex  justify-center items-center gap-[150px]">
        <div className = {classes.slider}>
          <ImageSlider />
        </div>
        <div>
          <div className = " mb-5">
            <h1 className = " text-center text-5xl font-bold text-gray-400 mb-1">Explore Some Gadgets</h1>
            <p className = "font-bold text-gray-500 text-xl text-center">Explore and share some of your favorite gadgets!</p>
          </div>

          <div className = " flex justify-between items-center">
            <Link href = "/community" className = " font-bold text-2xl text-sky-500">
              Join the Community
            </Link>
            <Link href = "/gadgets"  className = " font-bold text-2xl bg-blue-950 py-1 px-2 text-stone-300 rounded-md">
              Explore TechWave
            </Link>
          </div>
        </div>
        
      </div>
    </header>
    
    <main className = " text-white flex flex-col justify-center items-center">
        <section className = " my-10 ">
          <h1 className = "text-center font-bold text-5xl text-gray-600 mb-3">How it Works</h1>
          <p className = " text-center text-xl font-semibold mb-3 text-gray-500">
            TechWave Gadgets is a platform that can you share your favorite gadgets and  <br /> 
            It&apos;s a place to discover new gadgets.
          </p>

          <p className = " text-center font-semibold text-xl text-gray-500">
            TechWave Gadgets is a place to discover new gadgets, and to connect
            with other's.
          </p>
        </section>

        <section>
          <h1 className = "text-center font-bold text-5xl text-gray-600 mb-3">Why TechWave?</h1>
          <p className = " text-center text-xl font-semibold mb-3 text-gray-500">
            TechWave Gadgets is a platform that can you share your favorite gadgets and <br />  
            It&apos;s a place to discover new gadgets.
          </p>
          <p className = " text-center font-semibold text-xl text-gray-500 mb-10">
            TechWave Gadgets is a place to discover new gadgets, and to connect
            with other's.
          </p>
        </section>

    </main>
    
    
  </>

    
  );
}


{/*<Image src = {imageSample} alt = "sample Image" className = " w-[20rem]" /> */}