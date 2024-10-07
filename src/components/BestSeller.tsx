import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bsetSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.bestseller === true
    );
    setBestSeller(filteredProducts);
  }, [products]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-10">
      <div>
        <Title text1={"BEST"} text2={"SELLER"} />
      </div>

      <div className="mx-20 my-10">
        <Slider {...settings}>
          {bsetSeller.map((item, index) => (
            <div className="flex-none w-60 p-5" key={index}>
              <ProductItem
                key={index}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestSeller;
