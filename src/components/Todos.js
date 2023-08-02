import React, { useState } from "react";

const Todos = () => {
  const [items, setItems] = useState([
    {
      todo: "Eat healthy foods",
    },
    {
      todo: "Drink plenty of water",
    },
    {
      todo: "Sleep for atleast 8 hours",
    },
  ]);

  let [userInput, setUserInput] = useState("");

  const handleAddData = () => {
    let newArray = [...items];
    newArray.push({ todo: userInput });

    setItems(newArray);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item, index) => {
      return index === id ? { ...item, checked: !item.checked } : item;
    });
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const filteredData = items.filter((item, index) => index !== id);
    setItems(filteredData);
  };

  const handleEdit = (id) => {
    items.find((value, index) =>
      index === id ? (userInput = value.todo) : ""
    );

    document.getElementById("userInput").value = userInput; //
    console.log(userInput); //

    setUserInput(userInput);
  };

  return (
    <div>
      <h3>ToDo List</h3>
      <div className="mb-3">
        <input
          id="userInput"
          type="text"
          placeholder="Enter your todo item"
          className="me-2"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={() => handleAddData()}>Add item</button>
      </div>

      {items.map((item, index) => (
        <div key={index} className="mb-2">
          <input type="checkbox" onChange={() => handleCheck(index)} />
          <label className="mx-2">{item.todo}</label>
          <button onClick={() => handleDelete(index)}>Delete</button>
          <button onClick={() => handleEdit(index)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
