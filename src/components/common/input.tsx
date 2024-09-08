import { InputHTMLAttributes, forwardRef } from "react"
type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input 
  ref={ref} 
  className="max-w-[80vw] md:w-[40vw] text-center
   border-slate-500 border-[0.5px]

   ease-in-out duration-300  rounded-lg p-3
   focus:border-none 
  focus:ring-blue-500 
  focus:ring-2 
  focus:shadow-blue-200 
  focus:shadow-lg 
 
  hover:border-blue-400 
  hover:ring-blue-200 
  hover:ring-2 hover:shadow-lg
  hover:shadow-blue-200 
  self-center" {...props} />
})
