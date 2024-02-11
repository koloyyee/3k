import { ChangeEvent, memo } from "react";
import { useWizard } from "react-use-wizard";
import { Props } from "../App"

export  const JobDescription: React.FC<Props> = memo(({stepNumber, formData, setFormData}) => {
  const { isLoading, handleStep } = useWizard(); 
  const labeStyle = (color: string) => `text-xl font-semibold underline my-2 decoration-${color}-400`
  const baseStyle = "border-slate-500 border-[0.5px] focus:border-none focus:ring-blue-500 focus:ring-2 focus f:shadow-blue-200 focus:shadow-lg ease-in-out duration-300  rounded-lg p-3";
  const inputStyle = baseStyle + " text-center"
  
  handleStep(() => {
    
  })

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value} = e.target;
    setFormData({
      ...formData,
      [name] : value
    })
    console.log(formData);
  }

  return (
    <div className="flex flex-col mt-5">
      <label className={labeStyle("orange")} htmlFor="company">Company Name</label>
      <input className={inputStyle} type="text" id="company" name="company" onChange={(e)=> handleChange(e)} />
      <label className={labeStyle("orange")} htmlFor="title">Job Title</label>
      <input  className={inputStyle}  type="text" id="title" name="title"  onChange={(e)=> handleChange(e)} />
      <label className={labeStyle("orange")} htmlFor="description">Job Description</label>
      <textarea  className={baseStyle}  name="description" id="description" cols="30" rows="10"  onChange={(e)=> handleChange(e)}></textarea>
      <button
            type="submit"
            className="bg-gray-100 hover:text-white hover:bg-rose-500 hover:border-rose-300 hover:shadow-rose-300 ease-in-out duration-300 "
          >
            Generate!
          </button>
    </div>
  );
})
