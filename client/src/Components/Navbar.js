import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("pwd");
    navigate("/login");
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand text-warning" to="/">
          Project-1
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link
                class="nav-link active text-warning"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>

            <li class="nav-item dropdown"></li>
          </ul>

          {location.pathname == "/" ? (
            <button class="btn btn-outline-warning" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link class="btn mx-2 btn-outline-warning" to="/login">
                Login
              </Link>
              <Link class="btn mx-2 btn-outline-warning" to="signup">
                SignUp
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
