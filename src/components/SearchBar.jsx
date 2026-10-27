
function SearchBar({ searchText, setSearchText }) {
  return (
    <div>
      <label htmlFor="search">Search Contacts: </label>
      <input
        type="text"
        id="search"
        placeholder="Search by name or email"
        value={searchText}
        onChange={event => setSearchText(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
