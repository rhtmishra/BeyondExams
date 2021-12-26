import React, { useState } from "react";
import Common from "./Common.jsx";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import List from "./List.jsx";

const Manually = () => {
  const [item, setItem] = useState("");
  const [finalitem, setfinalItem] = useState([]);

  const setEventOne = (event) => {
    setItem(event.target.value);
  };

  const Add = () => {
    setfinalItem((oldItems) => {
      if (item === "") return [...oldItems];
      return [...oldItems, item];
    });
    setItem("");
  };

  const Edit = () => {
    return (
      <textarea
        type="text"
        rows="4"
        cols="50"
        value={item}
        onChange={setEventOne}
      />
    );
  };

  const deleteItems = (id) => {
    setfinalItem((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <section id="header" className="d-flex">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex  flex-column ">
                  <div className="lower">
                    <div className="line">
                      <p className="lpm1">
                        <AddIcon style={{ color: "rgb(87, 197, 230)" }} />
                      </p>
                      <p
                        style={{ color: "rgb(87, 197, 230)" }}
                        className="lpm2"
                        onClick={Edit}
                      >
                        CAPTION
                      </p>
                      <p
                        style={{ color: "rgb(87, 197, 230)" }}
                        className="lpm3"
                        onClick={Add}
                      >
                        EDIT AS TEXT
                      </p>
                      <p className="lpm3">
                        <MoreVertIcon />
                      </p>
                    </div>
                  </div>
                  <textarea
                    type="text"
                    rows="4"
                    cols="50"
                    value={item}
                    onChange={setEventOne}
                  />
                  <div className="main_div1">
                    <ol>
                      {finalitem.map((currValue, index) => {
                        return (
                          <List
                            id={index}
                            key={index}
                            text={currValue}
                            onSelect={deleteItems}
                          />
                        );
                      })}
                    </ol>
                  </div>

                  <hr />
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

export default Manually;
