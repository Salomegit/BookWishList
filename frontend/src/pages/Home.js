import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import "../styles/style.css"

const Home = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8801/books")
          setBooks(res.data)
        console.log(res)
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchAllBooks()
  }, [])



  return (
    <div>
      <h1>Book A wish </h1>
      <div className='books' >
        {books.map((book) => (
          <div className='book' key={book.id}>
            {book.cover && <img src={book.cover} alt='' />}
            <h1>{book.book_title}</h1>
            <p>{book.decscription}</p>
            <span>{book.price}</span>

          </div>
        ))}
            <button><Link to="/add">Add a book</Link></button>

      </div>

    </div>
  )
}

export default Home

