import React from "react";

const Button = ({ size, color, bgColor, text, borderRadius }) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: borderRadius,
      }}
      className={`text-${size} hover:drop-shadow-xl h-8 px-4 
        text-sm text-indigo-100 transition-colors duration-150 
         rounded-lg focus:shadow-outline hover:bg-indigo-800`}
    >
      {text}
    </button>
  );
};

export default Button;
