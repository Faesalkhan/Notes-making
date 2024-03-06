import React from "react";
const Header = ({ darkmode, setDarkmode }) => {
  return (
    <div className="row justify-content-between align-items-center  ">
      <div className="col-xs-12 col-sm-6">
        <h1>Note</h1>
      </div>
      <div className="col-xs-2 col-sm-1">
        <button
          className="btn btn-light bg-transparent border-0 "
          onClick={() => setDarkmode(!darkmode)}
        >
          🌙
        </button>
      </div>
    </div>
  );
};
export default Header;
