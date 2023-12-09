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
 
app.listen (8801,()=> {
    console.log("connected to Backend")

})


app.get("/" , (req,res) => {
    res.json("Connected to Backend1")
})



app.post("/books" , (req,res) => {
    const bookData = {
        book_title: "The Great Gatsby",
        decscription: "Tis is a cool book",
        cover: "cover.png",
        // Add more fields as needed
    };
    const q = "INSERT INTO chasing_book.book SET ?"

   
    db.query(q , bookData, (err,data) =>{
        if (err) return res.json("err")
        return res.json(data)
    })
})



app.get("/books", (req, res) => {
    const q = "SELECT * FROM chasing_book.book;";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});