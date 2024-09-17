import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import AboutMe from "../AboutMe/AboutMe";
import MyWork from "../MyWork/MyWork";

function Home() {
  return (
    <div className="flex flex-col">
      <LandingPage />
      <AboutMe />
      <MyWork />
    </div>
  );
}

export default Home;
