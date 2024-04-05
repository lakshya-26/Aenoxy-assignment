import React, { useState } from "react";
import Profession from "./components/Profession";
import "./StepForm.css"; // Import CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Interest from "./components/Interest";
import Thumbnail1 from "./components/Thumbnail1";
import Thumbnail2 from "./components/Thumbnail2";
import MathComfort from "./components/MathComfort";
import Path from "./components/Path";

const StepForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5; // Total number of steps in the form
  const [transitioning, setTransitioning] = useState(false);

  const handleNext = () => {
    setTransitioning(true);
    setTimeout(() => {
      setStep(step + 1);
      setTransitioning(false);
    }, 500); // Adjust the timeout duration to match your transition duration
  };

  const handlePrev = () => {
    setTransitioning(true);
    setTimeout(() => {
      setStep(step - 1);
      setTransitioning(false);
    }, 500);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div
            className={`p-4 step-content ${
              transitioning ? "transitioning" : ""
            }`}
          >
            <Profession handle={handleNext} />
          </div>
        );
      case 2:
        return (
          <div
            className={`p-4 step-content ${
              transitioning ? "transitioning" : ""
            }`}
          >
            <Interest handle={handleNext} />
          </div>
        );
      case 3:
        return (
          <div
            className={`p-4 step-content ${
              transitioning ? "transitioning" : ""
            }`}
          >
            <Thumbnail1 handle={handleNext} />
          </div>
        );
      case 4:
        return (
          <div
            className={`p-4 step-content ${
              transitioning ? "transitioning" : ""
            }`}
          >
            <MathComfort handle={handleNext} />
          </div>
        );
      case 5:
        return (
          <div
            className={`p-4 step-content ${
              transitioning ? "transitioning" : ""
            }`}
          >
            <Thumbnail2 handle={handleNext} />
          </div>
        );
      default:
        return (
          <div
            className={`step-content ${
              transitioning ? "transitioning" : ""
            }`}
          >
            <Path />
          </div>
        );
    }
  };

  const progressWidth = `${(step / totalSteps) * 100}%`;

  return (
    <div className="">
      <div
        className={`pt-12 px-8 flex flex-row items-center justify-center ${
          step > 5 ? "hidden" : ""
        }`}
      >
        <div>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={`text-xl mr-4 mb-3 cursor-pointer ${
              step === 1 ? "hidden" : ""
            }`}
            onClick={handlePrev}
          />
        </div>
        <div className="w-[90%] bg-gray-200 h-[5px] mb-4 rounded-lg">
          <div
            className={
              " h-full bg-[#22a082] transition-all duration-500 ease-in-out relative rounded-lg"
            }
            style={{ width: progressWidth }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">{renderStep()}</div>
    </div>
  );
};

export default StepForm;
