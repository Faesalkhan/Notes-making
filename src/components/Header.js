import React from "react";
const Header = ({ setDarkmode, darkmode }) => {
  return (
    <div className="container d-flex justify-content-between py-3 ">
      <h1>Note</h1>
      <button
        className="btn btn-light bg-transparent"
        onClick={() => setDarkmode(!darkmode)}
      >
        🌙
      </button>
    </div>
  );
};
export default Header;
