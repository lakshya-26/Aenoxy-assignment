import React from "react";
import image from "../assets/Screenshot_2024-04-04_000046-removebg-preview.png";
import Button from "../utils/Button";

const Thumbnail1 = ({ handle }) => {
  return (
    <>
      <div className="py-10 px-32 flex items-center justify-between">
        <div className="ml-20 w-[50%]">
          <img src={image} alt="image" className="" />
        </div>
        <div className="ml-[200px]">
          <h1 className="text-4xl mb-6 font-bold">You're in the right place</h1>
          <p className="text-xl w-[90%]">
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
