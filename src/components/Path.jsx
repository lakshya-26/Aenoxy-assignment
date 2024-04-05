import React, { useState, useEffect } from "react";
import "../css/buffer.css";
import Final from "./Final";

const Path = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="">
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
          <h1 className="relative top-[350px] md:left-[130px] left-[40px] text-center md:text-4xl text-xl font-semibold w-[80%]">
            Finding Learning Path recommendations for you based on your
            responses
          </h1>
        </div>
      ) : (
        <Final />
      )}
    </div>
  );
};

export default Path;
