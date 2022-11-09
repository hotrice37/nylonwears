const app=require("./app");
const db=require("./config/db")


app.listen(5000,()=>{
    console.log(`Server is working`)
})

db();