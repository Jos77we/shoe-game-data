import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./layouts/Home";
import Upload from "./layouts/Upload";
import List from "./layouts/List";
import Users from "./layouts/Users";
import Settings from "./layouts/Settings";
import Display from "./layouts/Display";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Upload" element={<Upload />} />
        <Route exact path="/List" element={<List />} />
        <Route exact path="/Users" element={<Users />} />
        <Route exact path="/Settings" element={<Settings />} />
        <Route exact path="/Display" element={<Display />} />
      </Routes>
    </>
  );
}

export default App;
