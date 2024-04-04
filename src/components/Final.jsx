import React, { useState } from "react";
import image from "../assets/Screenshot_2024-04-04_000224-removebg-preview.png";
import "../css/option.css";

const Final = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (boxId) => {
    setSelectedBox(boxId);
  };
  return (
    <div className="p-36">
      <div className="mb-20">
        <h1 className="text-center font-bold text-4xl mb-4">
          Learning paths on your answers
        </h1>
        <p className="text-center">
          Choose one to get started. You can switch anytime
        </p>
      </div>
      <div className="flex flex-wrap space-x-8 items-center justify-center">
        <div
          className={`option relative flex border-2 rounded-lg p-8 w-[400px] ${
            selectedBox === 1 ? "selected" : ""
          }`}
          onClick={() => handleBoxClick(1)}
        >
          <div className="absolute top-0 left-[100px] mt-[-16px] ml-2 bg-[#eda723] px-2 py-1 rounded-2xl font-semibold">
            MOST POPULAR
          </div>
          <div>
            <h2 className="text-xl font-bold">Foundational Math</h2>
            <p>
              Build your foundational skills in algebra, geometry, and
              probability
            </p>
          </div>
          <div>
            <img src={image} alt="image" />
          </div>
        </div>
        <div
          className={`option w-[400px] flex border-2 rounded-lg p-8 ${
            selectedBox === 2 ? "selected" : ""
          }`}
          onClick={() => handleBoxClick(2)}
        >
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">Mathematical Thinking</h2>
            <p className="w-[80%]">
              Build your foundational skills in algebra, geometry, and
              probability
            </p>
          </div>
          <div className="">
            <img src={image} alt="image" className="w-[200px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
