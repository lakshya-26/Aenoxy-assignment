import React from "react";
import "../css/option.css";

const BoxOption = ({
  image,
  title,
  level,
  className,
  isSelected,
  onOptionSelect,
}) => {
  return (
    <div
      className={`option md:w-[20%] w-[50%] p-10 border-2 rounded-xl flex flex-col items-center justify-center cursor-pointer ${
        isSelected ? "selected" : ""
      }`}
      onClick={onOptionSelect}
    >
      <div className={`w-[80%]`}>
        <img src={image} alt="image" />
      </div>
      <div className={`${className}`}>
        <p className="text-center font-bold">{title}</p>
        <h5 className="text-center text-xl text-[#8f8f8f]">{level}</h5>
      </div>
    </div>
  );
};

export default BoxOption;
