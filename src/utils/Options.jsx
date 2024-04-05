import React, { useState } from "react";
import "../css/option.css";

const Options = ({ imageLogo, span1, span2, isSelected, onOptionSelect }) => {
  return (
    <div className={`options mb-4 px-4`} onClick={onOptionSelect}>
      <div
        className={`option flex flex-nowrap m-[10px] pl-[10px] md:pr-[300px] pr-[10px] py-[10px] cursor-pointer border-2 rounded-lg transition-all duration-300 ease-in-out ${
          isSelected ? "selected" : ""
        }`}
      >
        <img
          src={imageLogo}
          alt="image"
          className={`sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] object-cover rounded-full`}
        />
        <span className="ml-4 mt-[5px] sm:text-xl font-semibold">{span1}</span>
        <span className="ml-[4px] mt-[5px] text-gray-500 sm:text-xl font-semibold sm:block hidden">
          {span2}
        </span>
      </div>
    </div>
  );
};

export default Options;
