import React, { useState } from "react";
import "../css/option.css";

const Options = ({ imageLogo, span1, span2, isSelected, onOptionSelect }) => {
  return (
    <div className={`options mb-4`} onClick={onOptionSelect}>
      <div
        className={`option flex flex-nowrap m-[10px] pl-[10px] md:pr-[300px] pr-[200px] py-[10px] cursor-pointer border-2 rounded-lg transition-all duration-300 ease-in-out ${
          isSelected ? "selected" : ""
        }`}
      >
        <img
          src={imageLogo}
          alt="image"
          className={`w-[50px] h-[50px] object-cover rounded-full`}
        />
        <span className="ml-4 mt-[5px] text-xl font-semibold">{span1}</span>
        <span className="ml-[4px] mt-[5px] text-gray-500 text-xl font-semibold">
          {span2}
        </span>
      </div>
    </div>
  );
};

export default Options;
