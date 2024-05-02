import React from "react";

const Header = ({ darkmode, setDarkmode }) => {
  return (
    <div className="container">
      <div className="row justify-content-between ">
        <div className="col-1">
          <h1>Notes</h1>
        </div>
        <div className="col-1">
          <button
            className="btn bg-transparent "
            onClick={() => setDarkmode(!darkmode)}
          >
            🌙
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
