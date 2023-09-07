import React from "react";

const Input = ({ type, placeholder = "", value, setValue }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className=" h-14 px-3 text-lg w-full border-solid border-2  rounded-md"
      />
    </div>
  );
};

export default Input;
