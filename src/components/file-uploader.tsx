import { useDropzone } from "react-dropzone";
import { useAppState } from "../util/state";
import { useForm } from "react-hook-form";
import { Form } from "./form/form";
import { useNavigate } from "react-router-dom";
import { Button } from "./form/button";
import { UploadIcon } from "../assets/upload-icon";

/**
 * FileUploader handles resume in PDF and DOCX
 * only accepting 1 file at a time
 * button will be disabled if the no file was uploaded.
 *
 *  Basic usage of the file dropzone
 *  reference https://react-dropzone.js.org/#section-basic-example
 * @returns React Component
 */
export function FileUploader() {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const navigate = useNavigate();
  // const watchFile = watch("resume");

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
      if (errors) console.log(errors);
      setState({ ...state, resume: files[0] });
    },
    maxFiles: 1,
  });

  function saveData() {
    /* Preload testing
    const body = new FormData();
    body.append("resume", state.resume!);
    const drafter = new Drafter(body);
    const resp = drafter.preload();
    */
    navigate("/job_description");
  }
  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <label
        className="block my-10 text-xl font-semibold underline decoration-green-300 decoration-4"
        htmlFor="resume"
      >
        Upload Your Resume
      </label>

      <p className="underline decoration-purple-400 decoration-2">
        {" "}
        for now, <strong>PDF only</strong>
      </p>
      <div
        {...getRootProps({
          className:
            "w-[70vw] rounded-lg border-dotted border-[2px] hover:border-dotted hover:border-blue-400 hover:ring-blue-200 hover:ring-2 hover:shadow-lg hover:shadow-blue-200 ease-in-out duration-300 min-h-96 flex flex-col justify-center items-center",
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
      <Button
        disabled={!state?.resume as boolean}
        className={
          state?.resume?.path
            ? "w-1/3 self-center mt-3"
            : " w-1/3 self-center mt-3 cursor-not-allowed"
        }
      >
        Next {">"}
      </Button>
    </Form>
  );
}
