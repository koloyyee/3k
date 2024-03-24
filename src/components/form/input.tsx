import { InputHTMLAttributes, forwardRef } from "react"
type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} className="w-[80vw] md:w-[50vw] text-center border-slate-500 border-[0.5px] focus:border-none focus:ring-blue-500 focus:ring-2 focus f:shadow-blue-200 focus:shadow-lg ease-in-out duration-300  rounded-lg p-3 hover:border-blue-400 hover:ring-blue-200 hover:ring-2 hover:shadow-lg hover:shadow-blue-200" {...props} />
})
