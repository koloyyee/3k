/*
 * Index tsx will be the combined layout of file upload
 * and the Company, Job title, Job Description
 * all in 1 page.
 *
 *
 * */

import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { UploadIcon } from "../../assets/upload-icon";
import { useState } from "react";
import { IForm } from "../../types/interfaces";
import { Field } from "../../components/common/fields";
import { Input } from "../../components/common/input";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/common/button";
import { Spinner } from "../../components/common/spinner";
import { Textarea } from "../../components/common/textarea";
import { Drafter } from "../../apis/drafter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * First part is the file upload:
 * 
 * FileUploader handles resume in PDF and DOCX
 * only accepting 1 file at a time
 * button will be disabled if the no file was uploaded.
 *
 *  Basic usage of the file dropzone
 *  reference https://react-dropzone.js.org/#section-basic-example
 * 
 * Second part takes the job details:
 * 
 * Job Description takes company, job title, and description of the job
 * all input field must be filled in
 * validating for empty input field with React-hook-from register function.
 * @link https://react-hook-form.com/docs/useform/register -> Options section.
 *
 * Implementing validation reference
 * @link https://claritydev.net/blog/form-validation-react-hook-form
 * @returns React Component
 */

export default function PublicIndex() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, setState] = useState<IForm>({
    company: "",
    title: "",
    description: "",
    resume: null,
  });
  const {
    register,
    handleSubmit,
    setValue,
    // watch,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const navigate = useNavigate();
  const {
    // acceptedFiles,
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept: {
      "application/pdf": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [],
    },
    onDrop: (files) => {
      setValue("resume", files[0]);
      setState({ ...state, resume: files[0]})
    },
    maxFiles: 1,
  });

  async function saveData(data: IForm) {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.set(key, value));

    const drafter = new Drafter(formData);
    try {
      const result = await toast.promise(drafter.publicPost(), {
        pending: "we are working on it!",
        success: "uploaded and process!",
        error: "Something went, please try again",
      });
      if (typeof result == "string") {
        navigate("/response", { state: { result, data: { ...state } } });
      }
    } catch (error) {
      console.error(error);
    }
  }

  const labelStyle =
    "flex flex-col text-xl font-semibold underline my-2 decoration-blue-200 decoration-4 ";

  return (
    <form
      className="sm:flex sm:flex-col md:grid md:grid-cols-12 mt-5 "
      onSubmit={handleSubmit(saveData)}
    >
      <div className="flex flex-col md:col-start-1 md:col-end-6 sm:mx-5">
        <label
          className="block my-10 text-xl font-semibold underline decoration-green-300 decoration-4"
          htmlFor="resume"
        >
          Upload Your Resume
        </label>

        <div
          {...getRootProps({
            className:
              "rounded-lg border-dotted border-[2px] hover:border-dotted hover:border-blue-400 hover:ring-blue-200 hover:ring-2 hover:shadow-lg hover:shadow-blue-200 ease-in-out duration-300 flex flex-col justify-center items-center sm:h-24 md:min-h-72",
          })}
        >
          <>
            <input {...getInputProps()} />
            {state.resume ? (
              <p>{state.resume?.name}</p>
            ) : (
              <>
                <UploadIcon />
                <p>Drag 'n' drop or click to select files</p>
              </>
            )}
          </>
        </div>
      </div>
      <div className="flex flex-col col-sm-12 mb-3 md:col-start-7 md:col-end-12">
        <Field
          label="Company Name"
          labelClass={labelStyle}
          error={errors.company?.message}
        >
          <Input
            {...register("company", {
              required: "Company name is required",
              minLength: {
                value: 1,
                message: "Company name must be at least 1 characters long",
              },
            })}
            id="company"
            disabled={isSubmitting}
          />
        </Field>
        <Field
          label="Job Title"
          labelClass={labelStyle}
          error={errors?.title?.message}
        >
          <Input
            {...register("title", {
              required: "Job title is required",
              minLength: {
                value: 1,
                message: "Job title must be at least 1 characters long",
              },
            })}
            id="title"
            disabled={isSubmitting}
          />
        </Field>
        <Field
          label="Job Description"
          labelClass={labelStyle}
          error={errors?.description?.message}
        >
          <Textarea
            {...register("description", {
              required: "Job title is required",
              minLength: {
                value: 1,
                message: "Job title must be at least 1 characters long",
              },
            })}
            id="description"
            disabled={isSubmitting}
          />
        </Field>

        <div className="flex gap-5 justify-center items-center self-center">
          {isSubmitting ? (
            <Spinner />
          ) : (
            <>
              <Button> {"Generate!"}</Button>
            </>
          )}
        </div>
        <ToastContainer position="top-center" />
      </div>
    </form>
  );
}
