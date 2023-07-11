import React from "react";

function Name(props) {
  let x = 5;
  let y = 4;

  let add = () => {
    let sum = x + y;
    return sum;
    // console.log(sum);
    // document.getElementById("demo").innerHTML = sum;
  };

  let newSum = add();

  return (
    <div>
      Hi welcome {props.name.firstName} {props.name.lastName}
      <p id="demo">{newSum}</p>
      <button onClick={add}>click me</button>
    </div>
  );
}

export default Name;
