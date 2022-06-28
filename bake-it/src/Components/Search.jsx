import {useState} from 'react';
import axios from 'axios';

const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault ()
    return (
      axios
      .get(`https://bake-it-till-you-make-it.herokuapp.com/api/all_recipes?search=${searchQuery}`)
      .then((res) => {
        console.log(res);
        props.setResults(res.data);
      })
    )
  }
  const handleChange = (event) => {
    setSearchQuery( event.target.value )
  }

  return (
    <>
    <form action="/" method="get" autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="header-search"></label>
      <input
        type="text"
        value={props.searchQuery}
        id="header-search"
        placeholder="Search"
        name="search"
        onChange={handleChange}
      />
      <div>
        <button type="submit" onClick={handleSubmit}>Search</button>
      </div>
      
    </form>
    </>
  )
}
export default Search;