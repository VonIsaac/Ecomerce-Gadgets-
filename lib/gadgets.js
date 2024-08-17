import sql from "better-sqlite3"

const db = sql('gadgets.db')

export async function getGadgets(){
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return db.prepare('SELECT * FROM gadgets').all()
}


export function getGadget (slug){
    return db.prepare('SELECT * FROM gadgets WHERE slug = ?').get(slug)
}


