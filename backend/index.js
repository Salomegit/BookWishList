import express from "express";
import mysql from 'mysql';


const app =  express()

// const db = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"password",
//     database:"chasing_book"
// }

// )
 
app.listen (8800,()=> {
    console.log("connected to Backend")

})


app.get("/" , (req,res) => {
    res.json("Connected to Backend")
})