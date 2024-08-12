import Image from "next/image"
import Cp1 from "@/assets/cp-3.svg"
import Cp2 from "@/assets/cp-1.svg"
import Cp3 from "@/assets/cp-2.svg"
const CommunityGadgets = () => {
    return (
        <>
            <header className = " text-white flex flex-col justify-center items-center my-10">
                <h1 className  = " text-5xl font-bold my-10  text-gray-600">
                    One shared passion: <span className = " text-blue-600">Gadgets</span>
                </h1>
                <p className = "text-xl font-semibold text-gray-500 mb-10 ">
                    Join our community and share your favorite Gadgets!
                </p>
            </header>
        
            <main className = " text-white">
                <ul className = " flex flex-col justify-center items-center">
                    <li className = " flex flex-col justify-center items-center">
                        <p className = " text-center text-4xl font-bold text-gray-600">
                            Shared and discover some phones
                        </p>
                        <Image src = {Cp1} alt = "A Celphone number 1" className = " w-[10rem] my-16" />
                    </li >
                    <li className = " flex flex-col justify-center items-center">
                        <p className = " text-center text-4xl font-bold text-gray-600">
                            Find new friends & like-minded people
                        </p>
                        <Image src = {Cp2}  alt = "A celphone number 2" className = " w-[10rem] my-16"/>
                    </li>
                    <li className = " flex flex-col justify-center items-center">
                        <p className = " text-center text-4xl font-bold text-gray-600">
                            Participate in exclusive events
                        </p>
                        <Image src = {Cp3} alt = "A celphone Number 3"  className = " w-[10rem] my-16"/>
                    </li>
                </ul>
            </main>
        
        </>
        
    )

}

export default CommunityGadgets