import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

const setTime = () => {
  // eslint-disable-next-line
  let setTimeForLoader;
  setTimeForLoader = setTimeout(showPage, 3000);
};
const showPage = () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
};

const App = () => {
  return (
    <div onLoad={setTime()} className="wholeApp">
      <div
        id="loader"
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
          height: "100vh",
        }}
      >
        <h1 className="animate__animated animate__slideInDown">
          Bup be xinh - Tu Tin Toa Sang
        </h1>
      </div>

      <div
        id="main"
        style={{ display: "none" }}
        className="animate__animated animate__slideInUp"
      >
        <NavBar />
      </div>
    </div>
  );
};

export default App;