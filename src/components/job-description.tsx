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

export function JobDescription() {
  const [submitting, setSubmitting] = useState(false);
  const [state, setState] = useAppState();

  const { handleSubmit, register } = useForm({ defaultValues: state });
  const navigate = useNavigate();


  async function saveData(data: FormType) {
    setState({ ...state, ...data });
    const body = new FormData();
    body.append("company", state.company);
    body.append("title", state.title);
    body.append("description", state.description);
    // body.append("resume", data.resume!);

    setSubmitting(true);
    console.log(submitting);
    const drafter = new Drafter(body);
    try {
      const result = await toast.promise(drafter.post(), {
        pending: "we are working on it!",
        success: "uploaded and process!",
        error: "Something went, please try again",
      });
      if (typeof result == "string") {
        /** post the body */
        // const result ="testing"
        console.log(submitting);
        navigate("/response", { state: { result, data: { ...state } } });
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log(submitting);
      setSubmitting(false);
    }
  }
  const labelStyle =
    "flex flex-col text-xl font-semibold underline my-2 decoration-blue-200 decoration-4 ";
  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <Field label="Company Name" labelClass={labelStyle} error={undefined}>
        <Input {...register("company")} id="company" disabled={ submitting} />
      </Field>
      <Field label="Job Title" labelClass={labelStyle} error={undefined}>
        <Input {...register("title")} id="title"  disabled={ submitting} />
      </Field>
      <Field label="Job Description" labelClass={labelStyle} error={undefined}>
        <Textarea {...register("description")} id="description"  disabled={ submitting} />
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
