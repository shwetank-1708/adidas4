import React from "react";
import Title from "./Title";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-yellow-500 h-24">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
          Join adidas and get 15% OFF
        </p>
      </div>

      <div>
        <div className="mt-4">
          <Title text1={"EXPLORE"} text2={"MORE"} />
        </div>

        <div className="flex flex-col items-center justify-center sm:flex-row gap-5 md:gap-10 font-bold m-10">
          <p>PRODUCTS</p>
          <p>SPORTS</p>
          <p>COLLECTIONS</p>
          <p>SUPPORT</p>
          <p>INFO</p>
        </div>
      </div>

      <div className="bg-gray-500 text-white font-sm p-5">
        <div className="flex items-center justify-center gap-10 p-5">
          <a href="">Privacy Policy</a>
          <a href="">Terms and Conditions</a>
          <a href="">Cookies</a>
        </div>

        <div className="flex items-center justify-center p-5 text-center">
          <p>©2024 adidas India Marketing Pvt. Ltd</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
