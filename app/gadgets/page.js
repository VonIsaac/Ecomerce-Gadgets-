
import Link from "next/link"
import GadgetGrid from "@/components/gadget/gadget-grid"
import { getGadgets } from "@/lib/gadgets"
import { Suspense } from "react"
const MainGadgets = async () => {
    // Then use async await as well 
    async function  Gadget(){
        const gadgets = await getGadgets()
        return <GadgetGrid gadget={gadgets} />
    }


    return (
        <>
            <header className = "  text-white">
               <h1 className = " text-5xl font-bold text-gray-600  mx-10 mt-8 mb-5">
                    Cool gadgets, created <span className = "">by you</span>
               </h1>
               <p className ="font-bold text-gray-600 mx-10 mb-5 text-2xl">
                    Choose your favorite mobile phone brand or anything, It is easy and fun
               </p>
               <p className ="font-bold text-gray-600 mx-10 mb-5 text-2xl">
                    <Link 
                        href = "/gadgets/shareGadgets" 
                        className = " bg-stone-600 text-slate-900 px-2 py-1 font-bold rounded-md">
                        Share your favorite smart phone
                    </Link>
               </p>
            </header>

            {/* then import the component to this components and use the props then pass the gadget await  */}
            <main className = " flex justify-center items-center px-5">
                <Suspense fallback = {<p className =" text-center text-gray-600 font-bold text-xl">Fetching Gadgets...</p>}>
                    <Gadget />
                </Suspense>
            </main>
        
        
        </>
    )
}

export default MainGadgets