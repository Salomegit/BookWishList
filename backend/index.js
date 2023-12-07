import express from "express";

const app =  express()

const db = mysql.createConnector({
    host:"localhost",
    user:"root",
    password:"password",
    database:"chasing_book"
}

)
 
app.listen (8800,()=> {
    console.log("connected to Backend")

})


app.get("/" , (res,req) => {
    res.json("Connected to Backend")
})