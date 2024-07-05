import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { Button as FBButton} from "flowbite-react";

type ButtonProps = {
  children: ReactNode;
  variant?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", ...props }, ref) => {
    ref;
    return (
      <FBButton className={`btn btn-${variant}`} {...props}>
        {children}
      </FBButton>
    );
  }
);