import React, { useState } from "react";
import Options from "../utils/Options";
import image1 from "../assets/1993906.png";
import image2 from "../assets/711-woman-style-9.svg";
import image3 from "../assets/437501.png";
import image4 from "../assets/14378829.png";
import image5 from "../assets/2247607.png";
import image6 from "../assets/images.jpg";
import Button from "../utils/Button";

const Profession = ({ handle }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="">
      <div className="">
        <h1 className="mt-10 mb-4 text-center sm:text-4xl text-xl font-bold">
          Which describes you best ?
        </h1>
        <p className="text-center sm:text-xl text-sm mb-14">
          This will help us personalize your experience
        </p>
      </div>
      <div className="mb-8">
        <Options
          imageLogo={image1}
          span1={"Student "}
          span2={"or soon to be enrolled"}
          isSelected={selectedOption === "student"}
          onOptionSelect={() => handleOptionClick("student")}
        />
        <Options
          imageLogo={image2}
          span1={"Professional "}
          span2={"pursuing a career"}
          isSelected={selectedOption === "professional"}
          onOptionSelect={() => handleOptionClick("professional")}
        />
        <Options
          imageLogo={image3}
          span1={"Parent "}
          span2={"of a school-age child"}
          isSelected={selectedOption === "parent"}
          onOptionSelect={() => handleOptionClick("parent")}
        />
        <Options
          imageLogo={image4}
          span1={"Lifelong learner"}
          isSelected={selectedOption === "learner"}
          onOptionSelect={() => handleOptionClick("learner")}
        />
        <Options
          imageLogo={image5}
          span1={"Teacher"}
          isSelected={selectedOption === "teacher"}
          onOptionSelect={() => handleOptionClick("teacher")}
        />
        <Options
          imageLogo={image6}
          span1={"Other"}
          isSelected={selectedOption === "other"}
          onOptionSelect={() => handleOptionClick("other")}
        />
      </div>
      <div className="flex items-center justify-center">
        <Button onClick={handle} disabled={!selectedOption} />
      </div>
    </div>
  );
};

export default Profession;
