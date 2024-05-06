import { TextareaHTMLAttributes, forwardRef } from "react";
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    return (
      <textarea
        className="max-w-[80vw] md:w-[40vw]
                  rounded-lg p-3
                 border-slate-500 border-[0.5px] 

                 ease-in-out duration-300  
                  focus:border-none 
                  focus:ring-blue-500 
                  focus:ring-2 focus 
                  focus:shadow-blue-200 
                  focus:shadow-lg 

                  hover:border-blue-400 
                  hover:ring-blue-200 hover:ring-2 hover:shadow-lg
                   hover:shadow-blue-200 
                  
                   self-center md:self-none"
        ref={ref}
        {...props}
        cols={30}
        rows={10}
      ></textarea>
    );
  }
);
