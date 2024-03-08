import { useDropzone } from "react-dropzone";
import { useAppState } from "../util/state";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "./form/input";
import { Field } from "./form/fields";
import { Form } from "./form/form";
import { useNavigate } from "react-router-dom";
import { Button } from "./form/button";
/**
 *  Basic usage of the file dropzone
 *  reference https://react-dropzone.js.org/#section-basic-example
 * @returns React Component
 */
export function FileUploader() {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const navigate = useNavigate();
  const watchFile = watch("file");

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [],
    },
    onDrop: (files) => {
      console.log(files[0])
      setState({...state, file: files[0]})
    },
    maxFiles: 1,
  });

  function saveData() {
    navigate("/job_description");
  }
  return (
    <Form  onSubmit={handleSubmit(saveData)}>
      {/* <Field
        label="Upload Your Resume"
        labelClass="block my-10 text-xl font-semibold underline decoration-green-300 decoration-4"
        error={errors?.file}
      >
        <Input
          {...register("file", { required: "File cannot be empty" }, "")}
          id="file"
        />
      </Field> */}
      <label
        className="block my-10 text-xl font-semibold underline decoration-green-300 decoration-4"
        htmlFor="resume"
      >
        Upload Your Resume
      </label>
      <div
        {...getRootProps({
          className:
            "rounded-lg border-dotted border-[2px] hover:border-dotted hover:border-blue-400 hover:ring-blue-200 hover:ring-2 hover:shadow-lg hover:shadow-blue-200 ease-in-out duration-300 min-h-96 flex flex-col justify-center items-center",
        })}
      >
        {state.file ? (
            <p>{state.file?.name}</p>
          ) : (
            <>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </>
          )}
        
      </div>
      <p>{JSON.stringify(state?.file)}</p>
      <Button disabled={!state?.file} className={state?.file?.path ?  "w-1/3 self-center mt-3": " w-1/3 self-center mt-3 cursor-not-allowed"  }> Next {">"}</Button>
    </Form>
  );
}
