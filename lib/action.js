'use server'
import { saveGadgets } from "./gadgets";
import { redirect } from "next/navigation";
export async function sharGadgets(formData){
    // to manually handle form submission and collecting data
    const gadget = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        opinion: formData.get('opinion'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }
    // then use saveGadgets and stored the gadget obj 
   await saveGadgets(gadget);
   // redirecting to the gadgets page.
   redirect('/gadgets')
}