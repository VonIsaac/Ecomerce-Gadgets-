import Image from "next/image";
import Link from "next/link";
import imageSample from "@/assets/headerImage.png"
export default function Home() {
  return (
    <>
    <header className = " text-white">
      <div className = " flex  justify-center items-center gap-[150px]">
        <div>
          <Image src = {imageSample} alt = "sample Image" className = " w-[20rem]" />
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
    
    <main className = " text-white">
        <section>
          <h1>How it Works</h1>
          <p>
            TechWave Gadgets is a platform that can you share your favorite gadgets and   
            It&apos;s a place to discover new gadgets.
          </p>

          <p>
            TechWave Gadgets is a place to discover new gadgets, and to connect
            with other's.
          </p>
        </section>

        <section>
          <h1>Why TechWave?</h1>
          <p>
            TechWave Gadgets is a platform that can you share your favorite gadgets and   
            It&apos;s a place to discover new gadgets.
          </p>
          <p>
            TechWave Gadgets is a place to discover new gadgets, and to connect
            with other's.
          </p>
        </section>

    </main>
    
    
  </>

    
  );
}
