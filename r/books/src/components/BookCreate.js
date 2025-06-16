import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookCreate() {
  const [title, setTitle] = useState('')
  const {createBook} = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  }

  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <label>Tytuł:</label>
        <input onChange={handleChange} value={title} className="input"/>
        <button className="button">Dodaj</button>
      </form>
    </div>
  )
}

export default BookCreate