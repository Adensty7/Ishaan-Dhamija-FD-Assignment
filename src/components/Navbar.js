import React, { Component } from "react";
// For fetching data from API
import axios from "axios";
import "./Components.css";

class Navbar extends Component {
  state = { user: [] };
  componentDidMount() {
    // Fetching user data as soon as the component mounts
    axios.get("https://refertest.pythonanywhere.com/user/data").then((res) => {
      console.log(res.data);
      this.setState({
        user: res.data.data,
      }).catch((err) => {
        console.log(err);
      });
    });
  }
  render() {
    // Setting the value to the state of the component
    var { user } = this.state;
    var jo;
    var joimg;
    if (user) {
      jo = (
        <div class="row justify-content-center">
          <div class="offcanvas-header"></div>

          <div class="offcanvas-body text-center">
            <img
              src={user.pictureUrl}
              alt="User's dp"
              class="img-fluid"
              height={300}
              width={300}
            />
            <hr class="ly-text" />
            <h2 class="offcanvas-title ly-text" id="offcanvasScrollingLabel">
              {user.name}
            </h2>
            <p class="fs-4 ly-text">{user.college}</p>
            <hr class="ly-text" />
            <ul class="list-group fs-5">
              <a href="#"><li class="list-group-item wy-text">My Profile</li></a>
              <a href="#"><li class="list-group-item wy-text">My Applications</li></a>
              <a href="#"><li class="list-group-item wy-text">Edit Resume</li></a>
              <a href="#"><li class="list-group-item wy-text">Edit Preferences</li></a>
              <a href="#"><li class="list-group-item wy-text">Settings</li></a>
              <a href="#"><li class="list-group-item wy-text">Log out</li></a>
            </ul>
          </div>
        </div>
      );
      joimg = (
        <h3 class="text-dark px-3">
                    <img
                      src={user.pictureUrl}
                      alt="User's dp"
                      height={50}
                      width={50}
                    />{" "}
                  </h3>
      );
    }
    else {
      jo = (
        <div>
          <h1>Loading .....</h1>
        </div>
      );
      joimg = (
        <div>
          <h1>Loading .....</h1>
        </div>
      );
    }
    return (
      <div>
        <div
          class="offcanvas offcanvas-end"
          data-bs-scroll="true"
          data-bs-backdrop="true"
          tabindex="-1"
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
          {jo}
        </div>
        <nav class="navbar fixed-top navbar-expand-xl">
          <div class="container">
            <a class="navbar-brand fs-1 ly-text" href="#">
              Job Openings
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#nav1"
              aria-controls="nav1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="nav1">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 offset-lg-3 fs-4">
                <li class="nav-item">
                  <a class="nav-link ly-text" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ly-text" href="#">
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ly-text" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <form class="d-none d-xl-flex" role="search">
                <a
                  class="btn"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasScrolling"
                  aria-controls="offcanvasScrolling"
                >
                  {joimg}
                </a>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
