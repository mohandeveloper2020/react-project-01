import React from "react";

const Users = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((respons) => respons.json())
    .then((data) => {
      console.log(data);
    });

  return <></>;
};

export default Users;
