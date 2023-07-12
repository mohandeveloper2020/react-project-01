import React from "react";

const Users = () => {
  fetch("db.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  return <></>;
};

export default Users;
