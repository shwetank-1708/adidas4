import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    products.map((item) => {
      if (item.id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ------------------Product Data------------------ */}
      <div className="flex flex-col items-center justify-center m-10 lg:flex-row">
        {/*------------------ Product Images------------------ */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>

          <div className="w-full sm-w[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/*------------------ Product Info------------------ */}
        <div className="flex-1 ml-10">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {/* <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" /> */}
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData.id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />

          <div className="text-sm text-gray-600 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* ------------------ Description & Review Section ------------------  */}
      <div className="m-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>

        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
            fugiat autem repellat, recusandae temporibus sed aliquid, illo
            numquam voluptate ex, ipsa sapiente? Quibusdam, maxime cupiditate.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            impedit saepe, ad suscipit vitae molestias quidem consequuntur,
            exercitationem incidunt, iure nulla cum placeat atque sit ut sunt in
            perspiciatis at.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquam
            voluptatem asperiores, dolor ut iure unde nulla, adipisci velit in
            facilis obcaecati consequatur. Nostrum dolores magni cupiditate
            illo. Fuga, enim?Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Recusandae eaque obcaecati, vitae velit corporis inventore
            magnam voluptate dicta. Porro, repellat.
          </p>
        </div>
      </div>

      {/*  ------------------ Display Related Products  ------------------  */}

      {/* <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      /> */}
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
