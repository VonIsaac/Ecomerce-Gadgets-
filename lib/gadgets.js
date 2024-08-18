import sql from "better-sqlite3"

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


