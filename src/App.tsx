import { Dispatch, SetStateAction, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { FileUploader } from "./components/file-uploader";
import { Wizard } from "react-use-wizard";
import { StepperFooter } from "./components/stepper-footer";
import { JobDescription } from "./components/job-description";


export interface Form {
  company: string;
  title: string;
  description: string;
  resume: File | null
}
export type Props = {
  stepNum: number;
  formData: Form;
  setFormData : Dispatch<SetStateAction<Form>>
  withCallback?: boolean;
};


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

  return (
    <main>
      <h1 className="text-4xl">
        Job Search is <span className="underline  decoration-red-500">hard</span>
        <br />
        Let Us Help You to Draft the Cover Letter
      </h1>
      <form>
        <Wizard footer={<StepperFooter />}>
          <FileUploader stepNum={1} formData={formData} setFormData={setFormData}/>
          {/* {formData.resume !== null ? formData.resume.name : ""} */}
          <JobDescription stepNum={2} formData={formData} setFormData={setFormData} />
        </Wizard>
      </form>
    </main>
  );
}

export default App;
