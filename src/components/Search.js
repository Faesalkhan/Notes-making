import React from "react";
const Search = ({
  searchText,
  setSearchText,
  allNotes,
  setAllNotes,
  notes,
}) => {
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    const filteredNotes = notes.filter((note) =>
      note.text.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setAllNotes(filteredNotes);
  };
  return (
    <div className="container ">
      <div className="row bg-light rounded-5 p-2">
        <button className="col-1 disabled border-0 bg-transparent">🔍</button>
        <div className="col-11 ">
          <input
            type="input"
            className="form-control bg-transparent border-0 "
            placeholder="search your note here..."
            value={searchText}
            onChange={handleSearch}
          ></input>
        </div>
      </div>
    </div>
  );
};
export default Search;
