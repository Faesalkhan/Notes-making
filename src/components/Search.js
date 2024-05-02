import React from "react";

const Search = ({ search, setSearch, updateSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
    updateSearch(e.target.value);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            className="form-control"
            placeholder="search note..."
          ></input>
        </div>
      </div>
    </div>
  );
};
export default Search;
