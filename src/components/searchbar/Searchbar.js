import React from "react";
import { useState } from "react";

function SearchBar() {

  const [ value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onSearch = (searchTerm) => {
    //our api to fetch search result
    console.log("search", searchTerm);
  }

  return (
    <div className="search-container">
      <div className="search-inner">
        <input type="text" value={value} onChange={onChange} />
        <button onClick={() => onSearch(value)}>Search</button>
       </div>
       <div className="dropdown">

       </div>
    </div>
  )
}

export default SearchBar;