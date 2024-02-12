import { useState } from "react";
// import "./App.css";
import { FileUploader } from "./components/file-uploader";
import { Wizard } from "react-use-wizard";
import { StepperFooter } from "./components/stepper-footer";
import { JobDescription } from "./components/job-description";
import { isValid } from "./util/formValidation";
import { Form } from "./types/interfaces";
import { Resume } from "./apis/post";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';




/**
 * Start implementing Stepper form
 * @see reference https://github.com/devrnt/react-use-wizard
 */
function App() {
  const [formData, setFormData ] = useState<Form>({
    company: "",
    title: "",
    description: "",
    resume: null,
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if(!isValid(formData)) return;

    const body = new FormData();
    body.append("company", formData.company);
    body.append("title", formData.title);
    body.append("description", formData.description)
    body.append("resume", formData.resume!);

    const resume = new Resume(body);
    const result = await resume.post();
    result? toast("Success!") : toast.error("Failed!")

  }
    return (
    <main>
      <h1 className="text-4xl">
        Job Search is <span className="underline  decoration-red-500">hard</span>
        <br />
        Let Us Help You to Draft the Cover Letter
      </h1>
      <form onSubmit={(e) => handleSubmit(e)} method="POST">
        <Wizard footer={<StepperFooter />}>
          <FileUploader stepNum={1} formData={formData} setFormData={setFormData}/>
          {/* {formData.resume !== null ? formData.resume.name : ""} */}
          <JobDescription stepNum={2} formData={formData} setFormData={setFormData} />
        </Wizard>
      </form>
      <ToastContainer />
    </main>
  );
}

export default App;
