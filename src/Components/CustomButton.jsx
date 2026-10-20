import React from 'react';

const CustomButton = ({
  text,
  bg = 'bg-blue-700',
  className = '',
  ...rest // capture any other props (like onClick, type, etc.)
}) => {
  return (
    <button
      className={`md:px-5 py-2 px-3 md:py-2.5 md:text-base text-sm me-2 rounded transition-all duration-300
        ${bg} bg-button-bg
        hover:dark:text-white hover:bg-blue-800 dark:hover:bg-button-bg-dark dark:bg-button-bg-dark
        hover:shadow-button-light text-white dark:text-white hover:dark:shadow-button-dark focus:outline-none
        ${className}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default CustomButton;
