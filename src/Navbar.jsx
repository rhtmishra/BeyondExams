import React from "react";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
              <div className="container-fluid">
                <div className="left">
                  <div className="left-1">
                    <p>
                      <SubtitlesIcon color="primary" fontSize="large" />
                    </p>
                  </div>
                  <div className="left-2">
                    <p>English (India)</p>
                  </div>
                </div>
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        exact
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        <AssignmentLateIcon
                          fontSize="large"
                          style={{ color: "rgb(209, 206, 206)" }}
                        />
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link "
                        aria-current="page"
                        to="/"
                        style={{
                          fontWeight: "bold",
                          color: "rgb(170, 170, 170)",
                          textDecoration: "none",
                        }}
                      >
                        SAVE DRAFT
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        aria-current="page"
                        to="/service"
                      >
                        <button className="publish">PUBLISH</button>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        aria-current="page"
                        to="/about"
                      >
                        <CloseIcon
                          color="primary"
                          fontSize="large"
                          style={{ color: "rgb(209, 206, 206)" }}
                        />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
