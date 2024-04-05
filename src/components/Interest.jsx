import React, { useState } from "react";
import Options from "../utils/Options";
import image1 from "../assets/Screenshot_2024-04-03_235900-removebg-preview.png";
import image2 from "../assets/Screenshot_2024-04-03_235923-removebg-preview.png";
import image3 from "../assets/Screenshot_2024-04-03_235941-removebg-preview.png";
import image4 from "../assets/Screenshot_2024-04-03_235954-removebg-preview.png";
import image5 from "../assets/Screenshot_2024-04-04_000008-removebg-preview.png";
import Button from "../utils/Button";

const Interest = ({ handle }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div>
        <h1 className="mt-10 mb-4 text-center sm:text-4xl text-lg font-bold">
          Which are you most interested in ?
        </h1>
        <p className="text-center sm:text-xl text-sm mb-14">
          Choose just one. This will help us get you started (but won't limit
          your experience).
        </p>
      </div>
      <div className="mb-8">
        <Options
          imageLogo={image1}
          span1={"Learning specific skills to advance my career"}
          isSelected={selectedOption === "learn"}
          onOptionSelect={() => handleOptionClick("learn")}
        />
        <Options
          imageLogo={image2}
          span1={"Exploring new topics I'm interested in"}
          isSelected={selectedOption === "explore"}
          onOptionSelect={() => handleOptionClick("explore")}
        />
        <Options
          imageLogo={image3}
          span1={"Refreshing my math foundations"}
          isSelected={selectedOption === "refresh"}
          onOptionSelect={() => handleOptionClick("refresh")}
        />
        <Options
          imageLogo={image4}
          span1={"Exercising my brain to stay sharp"}
          isSelected={selectedOption === "exercise"}
          onOptionSelect={() => handleOptionClick("exercise")}
        />
        <Options
          imageLogo={image5}
          span1={"Something else"}
          isSelected={selectedOption === "else"}
          onOptionSelect={() => handleOptionClick("else")}
        />
      </div>
      <div className="flex items-center justify-center">
        <Button onClick={handle} disabled={!selectedOption} />
      </div>
    </div>
  );
};

export default Interest;
