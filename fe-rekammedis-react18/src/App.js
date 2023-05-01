import React from "react";
import NavbarPublic from "./views/layouts/NavbarPublic";
import Routes from "./Routes";

function App() {
  return (
    <>
      <NavbarPublic />
      <div style={{ height: "55px" }}></div>
      <Routes />
    </>
  );
}

export default App;
