import { ChangeEvent, memo } from "react";
import { useWizard } from "react-use-wizard";
import { isValid } from "../util/form-validation";
import { Props } from "../types/types";
import { Form } from "../types/interfaces";

export const JobDescription: React.FC<Props> = memo(
  ({ stepNumber, formData, setFormData }) => {
    const { isLoading, handleStep, goToStep } = useWizard();

    handleStep(() => { });

    function handleChange(
      e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    const btnStyle = (formData: Form) =>
      isValid(formData)
        ? "my-3 bg-gray-100 dark:bg-gray-500 dark:text-gray-300 hover:text-white hover:bg-rose-500 hover:border-rose-300 hover:shadow-rose-300 ease-in-out duration-300"
        : "my-3 bg-gray-100  dark:bg-gray-500 dark:text-gray-300 cursor-not-allowed";
    const baseStyle =
      "border-slate-500 border-[0.5px] focus:border-none focus:ring-blue-500 focus:ring-2 focus f:shadow-blue-200 focus:shadow-lg ease-in-out duration-300  rounded-lg p-3 hover:border-blue-400 hover:ring-blue-200 hover:ring-2 hover:shadow-lg hover:shadow-blue-200";
    const inputStyle = baseStyle + " text-center";

    return (
      <div className="flex flex-col mt-5">
        <label
          className="text-xl font-semibold underline my-2 decoration-orange-400 decoration-4"
          htmlFor="company"
        >
          Company Name
        </label>
        <input
          className={inputStyle}
          type="text"
          id="company"
          name="company"
          defaultValue={formData.company}
          onChange={(e) => handleChange(e)}
          required
        />
        <label
          className="text-xl font-semibold underline my-2 decoration-blue-200 decoration-4"
          htmlFor="title"
        >
          Job Title
        </label>
        <input
          className={inputStyle}
          type="text"
          id="title"
          name="title"
          defaultValue={formData.title}
          onChange={(e) => handleChange(e)}
          required
        />
        <label
          className=" text-xl font-semibold underline my-2 decoration-purple-200 decoration-4"
          htmlFor="description"
        >
          Job Description
        </label>
        <textarea
          className={baseStyle}
          name="description"
          id="description"
          defaultValue={formData.description}
          cols={30}
          rows={10}
          onChange={(e) => handleChange(e)}
          required
        ></textarea>
        <button
          type="submit"
          onClick={() => goToStep(3)}
          className={btnStyle(formData)}
          disabled={!isValid(formData)}
        >
          Generate!
        </button>
      </div>
    );
  }
);
