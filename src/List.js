import React from "react";
import data from "./data";

const List = ({ name, age, image }) => {
  return (
    <div className="person">
      <img src={image}></img>
      <h4>{name}</h4>
      <p>{age}</p>
    </div>
  );
};

export default List;
