import React from "react";
import "./button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
    className?: string;
}

export const Button = ({ children, className, ...props }: ButtonProps) => <button className={`generic__button ${className}`} {...props} >{children}</button>