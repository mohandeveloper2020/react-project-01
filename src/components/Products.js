import React from "react";
import carTata from "../images/car-tata.jfif";
import carMaruti from "../images/car-maruti.jpeg";

const Products = () => {
  const items = [
    { id: 1, name: "Maruti", image: carMaruti },
    { id: 2, name: "Tata", image: carTata },
    { id: 3, name: "Maruti", image: "EC" },
    { id: 4, name: "Maruti", image: "EC" },
    { id: 5, name: "Maruti", image: "EC" },
  ];
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            {item.name}
            <img src={item.image} alt="car" />
          </li>
        );
      })}
    </ul>
  );
};

export default Products;
