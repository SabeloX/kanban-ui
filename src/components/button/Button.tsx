import React from "react";
import "./button.css";

/**
 * Props for the Button component.
 * @interface ButtonProps
 * @property {string} children - The text to be displayed on the button.
 * @property {string} [className] - Additional CSS class name for customization.
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
    className?: string;
}

/**
 * The Button component is used to create buttons in the application.
 * @param {ButtonProps} props - The properties of the Button component.
 * @returns {JSX.Element} The Button component JSX.
 */
export const Button = ({ children, className, ...props }: ButtonProps) => <button className={`generic__button ${className}`} {...props} >{children}</button>