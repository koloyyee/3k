import { useAppState } from "../../util/state";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Field } from "../common/fields";
import { Input } from "../common/input";
import { Form } from "../common/form";
import { Textarea } from "../common/textarea";
import { Button } from "../common/button";
import { useState } from "react";
import { Drafter } from "../../apis/Drafter";
import { IForm} from "../../types/interfaces";
import { Spinner } from "../common/spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/**
 * @deprecated
 * Job Description takes company, job title, and description of the job
 * all input field must be filled in
 * validating for empty input field with React-hook-from register function.
 * @link https://react-hook-form.com/docs/useform/register -> Options section.
 *
 * Implementing validation reference
 * @link https://claritydev.net/blog/form-validation-react-hook-form
 * @returns React Component
 */
export function JobDescription() {
  const [submitting, setSubmitting] = useState(false);
  const [state, setState] = useAppState();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: state });
  const navigate = useNavigate();
 

  async function saveData(data: IForm ) {
    setState({ ...state, ...data });
    const body = new FormData();
    body.append("company", data.company);
    body.append("title", data.title);
    body.append("description", data.description);
    body.append("resume", data.resume!);

    setSubmitting(true);
    const drafter = new Drafter(body);
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
    } finally {
      setSubmitting(false);
    }
  }
  const labelStyle =
    "flex flex-col text-xl font-semibold underline my-2 decoration-blue-200 decoration-4 ";
  return (
    <Form onSubmit={handleSubmit(saveData)}>
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
            // onChange: (e) => { 
            //   setState({ ...state, ...e.target.value})
            //   console.log(state)
            // } 
          })}
          id="company"
          disabled={submitting}
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
          disabled={submitting}
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
          disabled={submitting}
        />
      </Field>

      <div className="flex gap-5 justify-center items-center self-center">
        {submitting ? (
          <Spinner />
        ) : (
          <>
            {/* <Link className={`btn btn-secondary`} to="/">
              {"Back"}
            </Link> */}
            <Button> {"Generate!"}</Button>
          </>
        )}
      </div>
      <ToastContainer position="top-center" />
    </Form>
  );
}
