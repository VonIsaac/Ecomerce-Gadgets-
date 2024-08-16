import Image from "next/image"
import { getGadget } from "@/lib/gadgets"
const GadgetsSlug = ({params}) => {
    const gadget = getGadget(params.gadjetslug)

    if(!gadget){
        throw new Error('An Error Occured')
    }
    gadget.opinion = gadget.opinion.replace(/\n/g, '<br />')
    return (
        <>
            <header className = " text-white">
                <div>
                    <Image src = {gadget.image } alt = {gadget.title}  width={500} height={500} />
                </div>
                <div>
                    <h1>{gadget.title}</h1>
                    <p>
                       by <a href = {`mailto:${gadget.creator_email}`}>{gadget.creator}</a>
                    </p>
                    <p>{gadget.summary}</p>
                </div>
                <main className = " text-white">
                    <p dangerouslySetInnerHTML= {{
                        __html: gadget.opinion
                    }}>

                    </p>
                </main>
            </header>
        </>
    )
}

export default GadgetsSlug