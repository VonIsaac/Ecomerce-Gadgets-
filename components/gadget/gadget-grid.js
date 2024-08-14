//import { Ultra } from "next/font/google";
import GadgetItem from "./gadget-item";


const GadgetGrid = ({gadget}) => {
    return (
        <ul>
            {gadget.map((gadgets) => (
                <li key = {gadgets.id}>
                    <GadgetItem {...gadgets} />
                </li>
            ))}
        </ul>
    )
}

export default  GadgetGrid