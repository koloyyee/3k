import { TextareaHTMLAttributes, forwardRef } from "react";
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement,TextareaProps >((props, ref) => {
  return (
    <textarea
      className="w-[80vw] md:w-[50vw] border-slate-500 border-[0.5px] focus:border-none focus:ring-blue-500 focus:ring-2 focus focus:shadow-blue-200 focus:shadow-lg ease-in-out duration-300  rounded-lg p-3 hover:border-blue-400 hover:ring-blue-200 hover:ring-2 hover:shadow-lg hover:shadow-blue-200"
      ref={ref}
      {...props}
      cols={30}
      rows={15}
    ></textarea>
  );
});
