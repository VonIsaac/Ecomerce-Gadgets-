import Link from "next/link"
import Image from "next/image"
import ImageHeader from '@/assets/header.svg'

const MainHeader = () => {


    return(
        <header className = " flex justify-around items-center mb-8 mt-1 bg-neutral-100 py-5 border-md">
            <Link href = "/">

                <Image src = {ImageHeader} alt = "A header Icon"  className = " w-[10rem]"/>

            </Link>

            <nav >
                <ul className = " flex justify-center items-center gap-5">
                    <li>
                        <Link href = '/gadgets' className = " text-stone-800 font-bold text-2xl">
                            Browse All Gadget's
                        </Link>
                    </li>

                    <li>
                        <Link href = "/community" className = " text-stone-800 font-bold text-2xl">
                            Gadgets Community
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader