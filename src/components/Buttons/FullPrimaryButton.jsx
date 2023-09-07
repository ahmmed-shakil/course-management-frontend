import React from "react";

const FullPrimaryButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" bg-primary px-3 hover:scale-105 text-gray-200 w-full rounded-md py-2 rounded-m border-solid border-2 border-transparent hover:bg-transparent hover:text-primary hover:border-primary"
    >
      {text}
    </button>
  );
};

export default FullPrimaryButton;
