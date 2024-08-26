'use server'
import { saveGadgets, deleteGadgets } from "./gadgets";
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

/*export async function deleteGadgetsItem(formData){

    const gadgetDelete = {
        title: formData.run('title'),
        summary: formData.run('summary'),
        opinion: formData.run('opinion'),
        image: formData.run('image'),
        creator: formData.run('name'),
        creator_email: formData.run('email')
    }

    await deleteGadgets(gadgetDelete)
    redirect('/gadgets')
}*/