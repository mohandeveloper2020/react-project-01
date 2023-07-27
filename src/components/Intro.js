import React, { useState } from "react";

const Intro = () => {
  const [text, setText] = useState("Earn");

  const updateText = () => {
    const value = ["Earn", "Grow", "Give"];
    const ind = Math.floor(Math.random() * 3);
    setText(value[ind]);
  };

  return (
    <div>
      <p>Lets {text} Money</p>
      <button onClick={() => updateText()}>Update</button>
    </div>
  );
};

export default Intro;
