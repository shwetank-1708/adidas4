import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <p className="text-3xl font-bold text-gray-800">{text1}</p>
      <p className="text-3xl font-bold text-gray-500">{text2}</p>
    </div>
  );
};

export default Title;
