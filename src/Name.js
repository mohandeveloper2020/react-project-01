import React from "react";

function Name({ firstName, lastName, edu, age, married, children }) {
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
      {`Hi welcome ${firstName} ${lastName}`}
      <br />
      {`studied ${edu[1]}, age is ${age}`}
      <br />
      {`married - ${married ? "yes" : "no"}`}
      <p id="demo">{newSum}</p>
      {children}
    </div>
  );
}

export default Name;
