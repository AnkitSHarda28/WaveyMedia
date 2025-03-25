import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
      {text}
    </button>
  );
};

export default Button;
