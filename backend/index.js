import express from "express";
import mysql from 'mysql';
import cors from 'cors';


const app =  express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"chasing_book"
}

)




app.use(express.json());
app.use(cors())

app.listen (8801,()=> {
    console.log("connected to Backend")

})


app.get("/" , (req,res) => {
    res.json("Connected to Backend1")
})



app.post("/books" , (req,res) => {

    const  {book_title,decscription,cover,price } = req.body

    const bookData = {
        book_title,
        decscription,
        cover,
        price
        // Add more fields as needed
    };
  
    const q = "INSERT INTO chasing_book.book SET ?"

   
    db.query(q , bookData, (err,data) =>{
        if (err) return res.json("err")
        return res.json("book is added succefully")
    })
})



app.get("/books", (req, res) => {
    const q = "SELECT * FROM chasing_book.book;";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
});