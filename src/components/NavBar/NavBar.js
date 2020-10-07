import React, { Component } from "react";
import "./NavBar.css";
import logo from "../../assets/Logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Blog from "../Blog/Blog";
import MusicLibrary from "../MusicLibrary/MusicLibrary";
import RegisterClass from "../RegisterClass/RegisterClass";
import Contact from "../Contact/Contact";
import LandingPage from "../LandingPage/LandingPage";

class NavBar extends Component {
  render() {
    return (
      <Router>
        <div style={{ marginBottom: "3rem" }}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Company Logo" height="40" />
            </a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Trang Chủ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link">
                    Sự Kiện
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/music-library" className="nav-link">
                    Thư Viện Media
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Đăng Kí Lớp Học
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Liên Hệ
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/blog" component={Blog} />
          <Route path="/music-library" component={MusicLibrary} />
          <Route path="/register" component={RegisterClass} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default NavBar;
