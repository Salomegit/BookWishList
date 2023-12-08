import express from "express";
import mysql from 'mysql';


const app =  express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"chasing_book"
}

)
 
app.listen (8800,()=> {
    console.log("connected to Backend")

})


app.get("/" , (req,res) => {
    res.json("Connected to Backend1")
})



app.get("/books" , (req,res) => {
    const q = "SELECT * FROM chasing_book.book;"
    db.query(q , (err,data) =>{
        if (err) return res.json(err)
        return res.json(data)
    })
})