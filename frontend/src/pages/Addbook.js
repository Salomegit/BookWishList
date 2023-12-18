import React, { useState } from 'react'

const Addbook = () => {

  const [book,setBook] = useState({
    book_title: "",
    decscription : "",
    cover:"",
    price: null

  })

  const onChangebook = (e) =>{
    setBook(prev=> ({...prev,[e.target.name] : e.target.value}))
  }

  console.log(book)
  return (
    <div className='form'>
        <p>Add book</p>
        <input type='text' placeholder='Book Title' onChange={onChangebook} name="book_title"/>
        <input type='text' placeholder='Book Description' onChange={onChangebook}  name="decscription"/>
        <input type='text' placeholder='Book Price' onChange={onChangebook}  name="price"/>
        <input type='text' placeholder='Book Cover' onChange={onChangebook}  name='cover'/>

    </div>
  )
}

export default Addbook
