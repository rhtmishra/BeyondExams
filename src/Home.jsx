import React from "react";
import Common from "./Common.jsx";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import TranslateIcon from "@mui/icons-material/Translate";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex  flex-column ">
                  <div className="upper">
                    <p>Select how you want to add captions</p>
                  </div>
                  <hr />
                  <div className="lower">
                    <div className="line">
                      <p className="lp1">
                        <FileUploadIcon />
                      </p>
                      <p className="lp2">Upload file</p>
                      <p className="lp3">
                        <HelpOutlineIcon />
                      </p>
                    </div>
                    <hr />
                    <div className="line">
                      <p className="lp1">
                        <AutoAwesomeIcon />
                      </p>
                      <p className="lp2">Auto-sync</p>
                      <p className="lp3">
                        <HelpOutlineIcon />
                      </p>
                    </div>
                    <hr />
                    <div className="line">
                      <p className="lp1">
                        <KeyboardIcon />
                      </p>
                      <p className="lp2">
                        <NavLink
                          to="/Manually"
                          exact
                          className="linkmanually"
                          aria-current="page"
                        >
                          Type Manually
                        </NavLink>
                      </p>
                      <p className="lp3">
                        <HelpOutlineIcon />
                      </p>
                    </div>
                    <hr />
                    <div className="line">
                      <p className="lp1">
                        <TranslateIcon />
                      </p>
                      <p className="lp2">Auto-translate</p>
                      <p className="lp3">
                        <HelpOutlineIcon />
                      </p>
                    </div>
                    <hr />
                  </div>
                </div>
                <Common />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
