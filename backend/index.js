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



app.post("/books", (req, res) => {
    const { book_title, decscription, price } = req.body;
    let cover = ''; // Variable to store the file path or file name after upload

    // Check if file is included in the request (assuming multipart/form-data)
    if (req.file) {
        // Assuming the file is saved in 'uploads' directory
        cover = req.file.path; // Set cover to the file path where it's saved
    }

    const bookData = {
        book_title,
        decscription,
        cover,
        price
        // Add more fields as needed
    };

    const q = "INSERT INTO chasing_book.book SET ?";

    db.query(q, bookData, (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error adding book" });
        }
        return res.status(200).json({ message: "Book added successfully" });
    });
});



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


app.delete("/books/:id_book", (req,res) => {  
   const bookId = req.params.id_book;
   const q = "DELETE FROM book WHERE id_book = ?"

   db.query(q,[bookId] , (err,data)=> {
    if (err) return  res.json(console.log(err))
    return res.json(console.log("book deleted succefully"))

   })
})

app.put("/books/:id_book", (req, res) => {
    const bookId = req.params.id_book;
    const q = "UPDATE book SET `book_title` = ?, `decscription` = ?, `cover` = ?, `price` = ? WHERE id_book = ?";
 
    const { book_title, decscription, cover, price } = req.body;
    const bookDataEdit = [book_title, decscription, cover, price, bookId]; // Array of values in the correct order

    db.query(q, bookDataEdit, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json("Book edited successfully");
    });
});
