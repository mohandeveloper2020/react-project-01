import React from "react";
import Intro from "../components/Intro";
import Users from "../components/Users";
import Todos from "../components/Todos";

const Home = () => {
  return (
    <>
      <div className="px-5 bg-light">
        <Intro />
        <Users />
        <Todos />
      </div>
    </>
  );
};

export default Home;
