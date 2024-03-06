import React, { useState } from "react";
const Search = ({ updateSearch }) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    updateSearch(e.target.value);
  };
  return (
    <div className="row">
      <div className="col-12">
        <input
          className="form-control rounded-5 "
          placeholder="search note..."
          value={search}
          onChange={handleSearch}
        ></input>
      </div>
    </div>
  );
};
export default Search;
