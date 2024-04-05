import React from "react";
import image1 from "../assets/Screenshot_2024-04-04_000115-removebg-preview.png";
import image2 from "../assets/Screenshot_2024-04-04_000132-removebg-preview.png";
import Button from "../utils/Button";

const Thumbnail2 = ({ handle }) => {
  return (
    <>
      <div className="py-16 md:px-32 px-8 flex md:flex-row flex-col items-center justify-between">
        <div className="md:ml-16 lg:w-[100%] md:w-[500px] w-[100%]">
          <img src={image1} alt="image" className="" />
        </div>
        <div className="lg:ml-[100px] ml-[50px]">
          <h1 className="text-4xl mb-6 font-bold">You're on your way!</h1>
          <img src={image2} alt="image" />
          <p className="mb-8 text-xl">
            "Through its engaging and well-structured courses, Brilliant has
            taught me mathematical concepts that I previously struggled to
            understand. I now feel confident approaching both technical job
            interview and real world problem solving situations."
          </p>
          <p className="text-xl">
            -- <em>Jacob S.</em>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button onClick={handle} />
      </div>
    </>
  );
};

export default Thumbnail2;
