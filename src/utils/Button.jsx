import React from "react";

const Button = ({ disabled, onClick }) => {
  return (
    <div>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Continue
      </button>
    </div>
  );
};

export default Button;
