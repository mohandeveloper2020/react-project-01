import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

const FavoriteColor = () => {
  const [color, setColor] = useState("red");

  const btnStyle = {
    padding: "0.5rem",
    marginRight: "0.5rem",
    border: "none",
  };

  return (
    <>
      <h1>
        My favorite color is <span style={{ color: color }}>{color}!</span>
      </h1>
      <button type="button" onClick={() => setColor("blue")} style={btnStyle}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("red")} style={btnStyle}>
        Red
      </button>
      <button type="button" onClick={() => setColor("pink")} style={btnStyle}>
        Pink
      </button>
      <button type="button" onClick={() => setColor("green")} style={btnStyle}>
        Green
      </button>
    </>
  );
};

export default FavoriteColor;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FavoriteColor />);
