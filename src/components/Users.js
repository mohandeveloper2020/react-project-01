import React, { useState } from "react";

const Users = () => {
  const [data, setData] = useState();

  fetch("db.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
      // console.log(data);
    });

  return (
    <>
      <p>{data}</p>
    </>
  );
};

export default Users;
