import { Dispatch, SetStateAction, memo, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useWizard } from "react-use-wizard";
import {  Props } from "../App";




/**
 *  Basic usage of the file dropzone
 *  reference https://react-dropzone.js.org/#section-basic-example 
 * @returns React Component 
 */

export const FileUploader: React.FC<Props> = memo(({ stepNum, formData, setFormData, withCallback = true}) => {
  const { isLoading, handleStep } = useWizard();

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    accept: {
      "application/pdf" : [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" : []
    }
  });




  useEffect(() => {
    acceptedFiles.map( file => {
      setFormData({
        ...formData,
        resume: file
      })
  })}, [acceptedFiles, formData, setFormData]);

  const labeStyle = (color: string) => `block my-10 text-xl font-semibold underline decoration-${color}-300`
  return (
    <section className=" ">
      <label className={labeStyle("green")} htmlFor="resume"> Upload Your Resume</label>
      <div {...getRootProps({className: "border-dotted border-[2px] hover:border-dotted hover:border-blue-400 hover:ring-blue-200 hover:ring-2 hover:shadow-lg hover:shadow-blue-200 ease-in-out duration-300 min-h-96 flex flex-col justify-center items-center"})}>
        {formData.resume  ? 
        <p>{formData.resume?.name}</p>
      :
      <>
        <input {...getInputProps()}/>
        <p>Drag 'n' drop some files here, or click to select files</p>
      </>
        }
      </div>

    </section>
   );
});