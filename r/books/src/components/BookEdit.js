import React, { useState, useContext } from 'react'
import BooksContext from '../context/books';

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById} = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    editBookById(book.id, title);
    onSubmit();
  }

  return (
    <form className='book-edit' onSubmit={handleSubmit}>
      <label>Tytuł:</label>
      <input className='input'onChange={handleChange} value={title}/>
      <button className='button is-primary'>Zapisz</button>
    </form>
  )
}

export default BookEdit