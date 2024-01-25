import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addbook = () => {
  const [book, setBook] = useState({
    book_title: '',
    decscription: '', // Corrected the typo in 'description'
    cover: null, // Changed from empty string to null for file handling
    price: ''
  });

  const navigate = useNavigate();

  const onChangebook = (e) =>{
    setBook(prev=> ({...prev,[e.target.name] : e.target.value}))
  }
  // const handleChange = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formData = new FormData();
  //     formData.append('book_title', book.book_title);
  //     formData.append('decscription', book.decscription);
  //     formData.append('price', book.price);
  //     formData.append('cover', book.cover); // Append the file to the FormData

  //     await axios.post('http://localhost:8801/books', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data' // Set content type for FormData
  //       }
  //     });
  //     navigate('/');
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const handleChange = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8801/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }; 

  return (
    <div>
      <div className='form'>
        <p>Add book</p>
        <input type='text' placeholder='Book Title' onChange={onChangebook} name='book_title' />
        <input type='text' placeholder='Book Description' onChange={onChangebook} name='decscription' />
        <input type='text' placeholder='Book Price' onChange={onChangebook} name='price' />
        <input type='text' placeholder='Book Cover' onChange={onChangebook} name='cover' />

        <button onClick={handleChange}>Add</button>
      </div>
    </div>
  );
};

export default Addbook;
