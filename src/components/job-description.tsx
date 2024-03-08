import { useAppState } from "../util/state";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Field } from "./form/fields";
import { Input } from "./form/input";
import { Form} from "./form/form";
import { Textarea } from "./form/textarea";
import { Button } from "./form/button";
import { useState } from "react";
import { Resume } from "../apis/Resume";
import { toast } from "react-toastify";

export function JobDescription (){
  const [submitting, setSubmitting] = useState(false);
  const [state, setState] = useAppState();
  const { handleSubmit, register } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  async function saveData(data) {
    setState({...state, ...data});
    console.log({...state, ...data})

      const body = new FormData();
      body.append("company", data.company);
      body.append("title", data.title);
      body.append("description", data.description);
      body.append("resume", data.resume!);
  
      setSubmitting(true);
      const resume = new Resume(body);
      try {
      //   const result = await toast.promise(resume.post(), {
      //     pending: "we are working on it!",
      //     success: "uploaded and process!",
      //     error: "Something went, please try again",
      //   });
      //   if (typeof result == "string") {
      //         /** post the body */
      //       }
      const result ="testing"
            navigate("/response", {state: {result}});

      } catch (error) {
        console.error(error)
      }
    

  }
    const labelStyle = "flex flex-col text-xl font-semibold underline my-2 decoration-blue-200 decoration-4"
    return (

      <Form onSubmit={handleSubmit(saveData)}  >
        <Field
          label="Company Name"
          labelClass={labelStyle}  error={undefined}>
            <Input
            {...register("company")} 
            id="company"
            />
        </Field>
          <Field
          label="Job Title"
          labelClass={labelStyle} error={undefined}>
            <Input
            {...register("title")} 
            id="title"
            />
        </Field>
        <Field
          label="Job Description"
          labelClass={labelStyle} error={undefined}>
            <Textarea
            {...register("description")} 
            id="description"
            />
        </Field>
       
        <div className="flex gap-5 justify-center items-center self-center">
          <Link className={`btn btn-secondary`} to="/">
            {"Back"} 
          </Link>
          <Button> {"Generate!"}</Button>
        </div>
      </Form>
    );
  };
