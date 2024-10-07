import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Women = () => {
  const { products } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.filter(
      (product) => product.category === "women"
    );

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
      console.log(productsCopy);
    }

    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === "women"
    );
    setFilterProducts(filteredProducts);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [subCategory]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p className="my-2 mx-5 text-xl flex items-center gap-2 font-bold">
          Filters
        </p>

        <div className="border border-gray-300 pl-5 py-3 my-2 mx-5">
          <p className="font-bold">TYPE</p>
          <div>
            <p>
              <input
                type="checkbox"
                className="mr-2"
                value={"Footwear"}
                onChange={toggleSubCategory}
              />
              Footwear
            </p>
            <p>
              <input
                type="checkbox"
                className="mr-2"
                value={"Clothing"}
                onChange={toggleSubCategory}
              />
              Clothing
            </p>
            <p>
              <input
                type="checkbox"
                className="mr-2"
                value={"Accessories"}
                onChange={toggleSubCategory}
              />
              Accessories
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 m-5">
        <div className="flex justify-between my-5">
          <Title text1={"WOMEN"} text2={"COLLECTION"} />
          <select className="border-2 border-gray-300 text-sm px-2">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Women;
