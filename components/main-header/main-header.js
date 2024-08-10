import Link from "next/link"
import Image from "next/image"
import ImageHeader from '@/assets/headerImage.png'

const MainHeader = () => {


    return(
        <header>
            <Link href = "/">

                <Image src = {ImageHeader} alt = "A header Icon"  className = " w-[20rem]"/>

            </Link>

            <nav>
                <ul>
                    <li>
                        <Link href = '/gadgets'>
                            Browse All Gadget's
                        </Link>
                    </li>

                    <li>
                        <Link href = "/community">
                            Gadgets Community
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader