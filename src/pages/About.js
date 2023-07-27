import React from "react";
import FavoriteColor from "../components/FavoriteColor";
import Name from "../components/Name";
import Bio from "../components/Bio";

const About = () => {
  let name = {
    firstName: "Mohan",
    lastName: "Munna",
  };

  let education = ["bcom", "mba"];

  let age = 35;

  let isMarried = true;

  return (
    <div className="px-5 bg-light">
      <Name {...name} edu={education} age={age} married={isMarried}>
        <Bio />
      </Name>
      <FavoriteColor />
    </div>
  );
};

export default About;
