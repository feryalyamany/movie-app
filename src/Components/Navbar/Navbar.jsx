import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo-dark.webp";
export default function Navbar() {
  let token = localStorage.getItem("token");
  let navgite = useNavigate();
  function logOut() {
    localStorage.clear();
    navgite("/login");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="movies">
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="tvshows">
                    Tv Shows
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="people">
                    People
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="networks">
                    Networks
                  </Link>
                </li>
              </ul>
          

            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
             

              {token ? (
                <>
                <li onClick={logOut} className="nav-item">
                  <Link className="nav-link btn" to="logout">
                    Logout
                  </Link>
                </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link btn" to="login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link btn" to="register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
