import React, {useState} from "react";

function Search({searchItems}) {
  const [search, setSearch] = useState("")

  const handleSearch = (e) =>{
    setSearch(e.target.value)
    searchItems(search)
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchItems(e.target.firstChild.value)
    setSearch("")
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
