import { useAppState } from "../util/state";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Field } from "./form/fields";
import { Input } from "./form/input";
import { Form } from "./form/form";
import { Textarea } from "./form/textarea";
import { Button } from "./form/button";
import { useState } from "react";
import { Drafter } from "../apis/Drafter";
import { Form as FormType } from "../types/interfaces";
import { Spinner } from "./spinner";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
/**
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

  const { handleSubmit, register, formState: { errors } } = useForm({ defaultValues: state });
  const navigate = useNavigate();


  async function saveData(data: FormType) {
    setState({ ...state, ...data });
    const body = new FormData();
    body.append("company", state.company);
    body.append("title", state.title);
    body.append("description", state.description);
    body.append("resume", state.resume!);

    setSubmitting(true);
    const drafter = new Drafter(body);
    try {
      const result = await toast.promise(drafter.post(), {
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
      <Field label="Company Name" labelClass={labelStyle} error={errors.company?.message}>
        <Input {...register("company", {
          required: "Company name is required",
          minLength: {
            value: 1,
            message: "Company name must be at least 1 characters long"
          }
        })} id="company" disabled={submitting} />
      </Field>
      <Field label="Job Title" labelClass={labelStyle} error={errors?.title?.message}>
        <Input {...register("title", {

          required: "Job title is required",
          minLength: {
            value: 1,
            message: "Job title must be at least 1 characters long"
          }
        })} id="title" disabled={submitting} />
      </Field>
      <Field label="Job Description" labelClass={labelStyle} error={errors?.description?.message}>
        <Textarea {...register("description", {

          required: "Job title is required",
          minLength: {
            value: 1,
            message: "Job title must be at least 1 characters long"
          }
        })} id="description" disabled={submitting} />
      </Field>

      <div className="flex gap-5 justify-center items-center self-center">
        {submitting ? (
          <Spinner />
        ) : (
          <>
            <Link className={`btn btn-secondary`} to="/">
              {"Back"}
            </Link>
            <Button> {"Generate!"}</Button>
          </>
        )}
      </div>
      <ToastContainer position="top-center" />
    </Form>
  );
}
