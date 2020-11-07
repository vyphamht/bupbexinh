import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

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
          alignContent: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h1 className="animate__animated animate__slideInDown">
          Búp Bê Xinh - Tự Tin Toả Sáng
        </h1>
      </div>

      <div
        id="main"
        style={{ display: "none" }}
        className="animate__animated animate__slideInUp"
      >
        <NavBar />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default App;
