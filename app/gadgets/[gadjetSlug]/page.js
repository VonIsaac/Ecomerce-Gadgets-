


import Image from "next/image"
import { getGadget} from "@/lib/gadgets"


const GadgetsSlug = ({params}) => {
    // and use the key params and then pass to getGadget as parameter that i import to lib/gadgets
    const gadget = getGadget(params.gadjetslug)
  
    // if false throw an error
    if(!gadget){
        throw new Error('An Error Occured')
    }
    // managing the text
    gadget.opinion = gadget.opinion.replace(/\n/g, '<br />')
    gadget.summary = gadget.summary.replace(/\n/g, '<br />')


    

    return (
        // lasly the gadget variable with the value of getGadget i pass it in image, h1, and p element to show the the image and title and so on..
        <>
            
           
            <header className = " text-white">
               <div className =" flex justify-center items-center" >
                    <div>
                        <Image 
                            src = {gadget.image } 
                            alt = {gadget.title}  
                            width={500} 
                            height={500} 
                            className = " w-[15rem] rounded" 
                        />
                    </div>
                    <div className =" ml-5 text-center">
                        <h1 className = " text-5xl font-bold  text-gray-600">{gadget.title}</h1>
                        <p className = " text-gray-500 pr-[200px] mb-5">
                            by <a href = {`mailto:${gadget.creator_email}`} 
                                className =" font-extrabold  hover:underline decoration-1">
                                {gadget.creator}
                            </a>
                        </p>
                        <p className = "text-gray-600 font-bold text-xl w-[30rem]" dangerouslySetInnerHTML= {{
                            __html: gadget.summary
                        }}>

                        </p>
                    </div>
               </div>
                <main className = " text-white flex flex-col justify-center items-center">
                    <p className = " bg-stone-600 my-10  px-4 rounded-md text-2xl pb-5 w-[50rem]" dangerouslySetInnerHTML= {{
                        __html: gadget.opinion
                    }}>

                    </p>
                </main>
            </header>
        </>
    )
}

export default GadgetsSlug