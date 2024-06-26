import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [dataArray, setDataArray] = useState(data);
  const clearClickHandler = () => {
    setDataArray((prevDataArray) => []);
  };
  return (
    <div className="container">
      <h3>{`${dataArray.length} Birthdays Today`} </h3>
      {dataArray.map(({ id, name, age, image }) => (
        <List key={id} name={name} age={age} image={image} />
      ))}
      <button onClick={clearClickHandler}>Clear All</button>
    </div>
  );
}

export default App;
