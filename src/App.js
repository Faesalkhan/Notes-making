import react, { useState } from "react";
import Search from "./components/Search";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
const App = () => {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div className={`${darkmode && "dark-mode"}`}>
      <div className="container appContainer">
        <Header setDarkmode={setDarkmode} darkmode={darkmode} />
        <NoteList />
      </div>
    </div>
  );
};
export default App;
