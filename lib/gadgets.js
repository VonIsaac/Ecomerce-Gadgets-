import fs from 'node:fs'

import sql from "better-sqlite3"
import slugify from "slugify"
import xss from "xss"
const db = sql('gadgets.db')

// i  fetch all data by using .all() and use ayncs await because wee return a promise
export async function getGadgets(){
    // i use setTimeout and wee wait 2 sec's to show the data in UI 
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return db.prepare('SELECT * FROM gadgets').all()
}

// to get slug by every item that i click to see the details i use .get to get all the item in database and i use parameters slug to detarmine every slug data i click
export function getGadget (slug){
    return db.prepare('SELECT * FROM gadgets WHERE slug = ?').get(slug)
}


/*async function generateUniqueSlug(baseSlug) {
    let slug = baseSlug;
    let count = 1;
    
    while (db.prepare(`SELECT COUNT(*) AS count FROM gadgets WHERE slug = ?`).get(slug).count > 0) {
      slug = `${baseSlug}-${count}`;
      count++;
    }
    
    return slug;
}*/


export async function saveGadgets(gadget){
    // i use slugify to creat URL friendly.
    gadget.slug = slugify(gadget.title, {lower: true})
    //use xss to  removing potentially harmful code, proteckting  Cross-Site Scripting (XSS) attacks.
    gadget.opinion = xss(gadget.opinion);

    // creating new file name in public/images.
    const extension = gadget.image.name.split('.').pop()
    const fileImage = `${gadget.slug}.${extension}`

    // to save imaage to the specified file path
    const stream = fs.createWriteStream(`public/images/${fileImage}`);
    const bufferImage =  await gadget.image.arrayBuffer()

    stream.write(Buffer.from(bufferImage), (err) => {
        // If an error occurs during the write operation, it throws an error indicating the failure to save the image.
        if(err){
            throw new Error('Saving Image failed!')
        }
    });
    // update with new file path
    gadget.image = `/images/${fileImage}`

    // insert the all data in the table and once the value set the better-sqlite 3 statement is executed with the filled-in data.
    db.prepare(`
        
        INSERT INTO gadgets 
            (title, summary, opinion, creator, creator_email, image, slug)   
        VALUES(
            @title,
            @summary,
            @opinion,
            @creator,
            @creator_email,
            @image,
            @slug
        
        )
    `).run({
        title: gadget.title,
        summary: gadget.summary,
        opinion: gadget.opinion,
        creator: gadget.creator,
        creator_email: gadget.creator_email,
        image: gadget.image,
        slug: gadget.slug
    });
}


