import { useSearchParams } from 'react-router-dom'


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useSearchParams()

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const searchTerm = formData.get('search')
    setSearchQuery({ search: searchTerm })
    form.reset()
  }

  return (
    <form action="/" method="get" autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="header-search"></label>
      <input
        type="text"
        id="header-search"
        placeholder="Search"
        name="search"
      />
      <div>
        <button type="submit">Search</button>
      </div>
      
    </form>
  )
}
export default SearchBar;