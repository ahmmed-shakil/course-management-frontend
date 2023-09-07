import React from "react";

const ButtonSecondary = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-200 text-gray-800 p-3 rounded-md mt-4 transition-all delay-200 shadow hover:shadow-lg hover:bg-transparent border-transparent border-solid border-2 hover:border-gray-200 hover:scale-105 hover:text-gray-200"
    >
      {text}
    </button>
  );
};

export default ButtonSecondary;
