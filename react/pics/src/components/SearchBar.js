import {React, useState } from "react";
import './SearchBar.css'

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('')

  const handleChange = (event) => {
    setTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(term)
  }

  return (
    <div class="search-bar">
      <form onSubmit={handleSubmit}>
        <label>Wpisz hasło</label>
        <input onChange={handleChange} value={term}/>
      </form>
    </div>
  )
}

export default SearchBar;
