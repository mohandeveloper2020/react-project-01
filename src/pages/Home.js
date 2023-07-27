import React from "react";
import Intro from "../components/Intro";
import Users from "../components/Users";

const Home = () => {
  return (
    <>
      <div className="px-5 bg-light">
        <Intro />
        <Users />
      </div>
    </>
  );
};

export default Home;
