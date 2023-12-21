import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import "../styles/style.css"
const Editbook = () => {

  const [book,setBook] = useState({
    book_title: "",
    decscription : "",
    cover:"",
    price: null

  })
 
  const navigate = useNavigate() 

  const onChangebook = (e) =>{
    setBook(prev=> ({...prev,[e.target.name] : e.target.value}))
  }

  const handleChange = async e => {
  e.preventDefault()
  try {
  await axios.put("http://localhost:8801/books", book)
  navigate("/")
  }
  catch(err){
   console.log(err)
  }
  }

  console.log(book)
  return (
    <div>

    <div className='form'>
        <p>Update New book</p>
        <input type='text' placeholder='Book Title' onChange={onChangebook} name="book_title"/>
        <input type='text' placeholder='Book Description' onChange={onChangebook}  name="decscription"/>
        <input type='text' placeholder='Book Price' onChange={onChangebook}  name="price"/>
        <input type='text' placeholder='Book Cover' onChange={onChangebook}  name='cover'/>
       

    </div>
       <button className='formButton' onClick = {handleChange}> Update </button>
    </div>
  )
}

export default Editbook
