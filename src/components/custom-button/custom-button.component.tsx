import React from "react";

import "./custom-button.styles.css";

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className="custom-button">
      {children}
    </button>
  );
};

export default CustomButton;
