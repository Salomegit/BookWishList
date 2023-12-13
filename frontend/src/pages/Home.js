import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from "axios"

const Home = () => {
   const [books,setBooks] = useState([])

   useEffect (() =>{
    const fetchAllBooks = async () =>{
        try{
           const res = await axios.get("http://localhost:8801/books")
           console.log(res)
        }
           catch(err)
        {
        console.log(err)
        }
        fetchAllBooks()
    }
   },[])



  return (
    <div>
      <p>Home pae</p>
   <Link to="/add">Add book</Link>


    </div>
  )
}

export default Home

