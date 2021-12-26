import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const List = (props) => {
  return (
    <>
      <div className="todo_style">
        <li>
          <p className="">{props.text}</p>
          <div
            className="dele"
            onClick={() => {
              props.onSelect(props.id);
            }}
          >
            <DeleteIcon fontSize="large" />
          </div>
        </li>
      </div>
    </>
  );
};

export default List;
