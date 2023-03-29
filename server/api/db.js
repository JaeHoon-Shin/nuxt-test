export default defineEventHandler(async(event) => {
    const method = getMethod(event);
    let rows;

    if(method == 'POST'){
        const  body = await readBody(event);
        await event.context.db.execute("insert into news (name,content,date) values (?,?,?)",[body.name,body.content,body.date]);
        [rows]= (await event.context.db.execute("select * from news"));
        
    }
    else{
        [rows] = await event.context.db.execute("SELECT * FROM news");
        
    }
    return rows;
})