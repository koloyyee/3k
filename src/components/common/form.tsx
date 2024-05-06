import { FormHTMLAttributes, ReactNode } from "react";

type FormProps = {
  children: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export const Form: React.FC<FormProps> = ({ children, ...props }) => {
  return (
    <form className="flex flex-col items-center mt-5 min-w-[70vw] " {...props} noValidate>
      {children}
    </form>
  );
};
