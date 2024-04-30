import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./util/state";
import { FileUploader } from "./components/file-uploader";
import { JobDescription } from "./components/job-description";
import { Response } from "./components/response";

export const App = () => {
  return (
    <div className="App">
        <h1 className="text-4xl">
        Job Search is{" "}
        <span className="underline  decoration-red-500">hard</span>
        <br />
        Let Us Help You to Draft the Cover Letter
      </h1>
      <p className="underline decoration-amber-400 decoration-2"> We are still in <strong>prototype</strong> sometimes response might not work.</p>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<FileUploader />} />
            <Route path="/job_description" element={<JobDescription/>} />
            <Route path="/response" element={<Response/>} />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
};
