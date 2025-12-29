import React from "react";
import Landing from "../Components/Landing";
import Highlights from "../Components/Highlights";
import Featured from "../Components/Featured";
import Explore from "../Components/Explore";
import Discounted from "../Components/Discounted";

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home;
