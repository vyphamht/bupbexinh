import React, { Component } from "react";
import "./NavBar.css";
import $ from "jquery";
import logo from "../../assets/ballet.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Blog from "../Blog/Blog";
import MusicLibrary from "../MusicLibrary/MusicLibrary";
import RegisterClass from "../RegisterClass/RegisterClass";

class NavBar extends Component {
  componentDidMount() {
    $("#search-icon").click(function () {
      $(".nav").toggleClass("search");
      $(".nav").toggleClass("no-search");
      $(".search-input").toggleClass("search-active");
    });

    $(".menu-toggle").click(function () {
      $(".nav").toggleClass("mobile-nav");
      $(this).toggleClass("is-active");
    });
  }
  render() {
    return (
      <Router>
        <div className="nav-wrapper">
          <nav className="navbar">
            <a href="/">
              <img src={logo} alt="Company Logo" />
            </a>
            <div className="menu-toggle" id="mobile-menu">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className="nav">
              <li className="nav-item">
                <Link to="/">Info</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/music-library">Music Library</Link>
              </li>
              <li className="nav-item">
                <Link to="/register">Register Class</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/blog" component={Blog} />
          <Route path="/music-library" component={MusicLibrary} />
          <Route path="/register" component={RegisterClass} />
        </Switch>
      </Router>
    );
  }
}

export default NavBar;
