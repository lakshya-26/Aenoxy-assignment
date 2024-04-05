import React from "react";
import image from "../assets/Screenshot_2024-04-04_000046-removebg-preview.png";
import Button from "../utils/Button";

const Thumbnail1 = ({ handle }) => {
  return (
    <>
      <div className="py-10 lg:px-32 flex md:flex-row flex-col items-center justify-between">
        <div className="md:ml-20 lg:w-[50%] md:w-[500px] w-[50%]">
          <img src={image} alt="image" className="" />
        </div>
        <div className="lg:ml-[200px] md:ml-[50px]">
          <h1 className="md:text-4xl sm:text-2xl text-xl md:text-left text-center mb-6 font-bold">You're in the right place</h1>
          <p className="md:text-xl text-lg md:text-left text-center w-[90%]">
            Brilliant gets you hands-on to improve your professional skills and
            knowledge. You'll interact with concepts and solve fun problems in
            math, science, and computer science.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button onClick={handle} />
      </div>
    </>
  );
};

export default Thumbnail1;
