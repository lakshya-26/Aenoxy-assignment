import React, { useState } from "react";
import BoxOption from "../utils/BoxOption";
import image1 from "../assets/Screenshot_2024-04-04_215212-removebg-preview.png";
import image2 from "../assets/Screenshot_2024-04-04_215235-removebg-preview.png";
import image3 from "../assets/Screenshot_2024-04-04_215251-removebg-preview.png";
import image4 from "../assets/Screenshot_2024-04-04_215305-removebg-preview.png";
import Button from "../utils/Button";

const MathComfort = ({ handle }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div>
      <div className="mb-20">
        <h1 className="text-center md:text-4xl text-2xl font-bold mb-4">
          What is your math comfort level ?
        </h1>
        <p className="text-center md:text-xl">
          Choose the highest level you feel confident in - you can always adjust
          later.
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center md:space-x-8 space-y-8">
        <BoxOption
          image={image1}
          title={"Arithmetic"}
          level={"Introductory"}
          className={"mt-4"}
          isSelected={selectedOption === "arithmetic"}
          onOptionSelect={() => handleOptionClick("arithmetic")}
        />
        <BoxOption
          image={image2}
          title={"Basic Algebra"}
          level={"Foundational"}
          className={"mt-12"}
          isSelected={selectedOption === "Algebra"}
          onOptionSelect={() => handleOptionClick("Algebra")}
        />
        <BoxOption
          image={image3}
          title={"Intermediate Algebra"}
          level={"Intermediate"}
          className={"mt-8"}
          isSelected={selectedOption === "Intermediate"}
          onOptionSelect={() => handleOptionClick("Intermediate")}
        />
        <BoxOption
          image={image4}
          title={"Calculus"}
          level={"Advanced"}
          isSelected={selectedOption === "Calculus"}
          onOptionSelect={() => handleOptionClick("Calculus")}
        />
      </div>
      <div className="mt-12 flex items-center justify-center">
        <Button onClick={handle} disabled={!selectedOption} />
      </div>
    </div>
  );
};

export default MathComfort;
