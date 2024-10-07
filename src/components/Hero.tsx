import React from "react";
import men from "../assets/men.jpg";
import women from "../assets/women.jpg";
import kids from "../assets/kids.jpg";
import Carousel from "./Carousel";

const Hero = () => {
  let slides = [men, women, kids];

  return (
    <div className="w-full m-auto md:w-2/3">
      <Carousel slides={slides} />
    </div>
  );
};

export default Hero;
