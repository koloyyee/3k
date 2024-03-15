import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", ...props }, ref) => {
    ref;
    return (
      <button className={`btn btn-${variant}`} {...props}>
        {children}
      </button>
    );
  }
);