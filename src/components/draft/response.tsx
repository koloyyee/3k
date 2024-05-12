import { useState } from "react";
import { useCopy } from "../../util/use-copy-hook";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

/**
 * Response shows the cover letter result.
 * User is able to copy text to clipboard 
 * @see {@link useCopy }
 * 
 * 
 * {@link useLocation} allow use to pass the props from one component to here.
 * in this case from result in an object `state` 
 * from {@link JobDescription} to {@link Response}.
 * 
 * 
 * TODO: Implementing a max of 3 retry due to RPM and token exceed concern.
 * @returns React Component
 */
export function Response() {
  const [_, copy] = useCopy();
  const { state } = useLocation(); 
  console.log({state});
  const { result } = state;
  const [draft, setDraft] = useState(result);
  // const [retryCount, setRetryCount] = useState(3);
  //setRetryCount;
  _;
  //  const navigate = useNavigate();

  function onCopy() {
    copy(draft.replace("DRAFT", ""));
    toast.success("Copied to clipboard!");
  }
  //function retry() {
  // console.log({data})
  // const body = new FormData();
  // body.append("company", data.company);
  // body.append("title", data.title);
  // body.append("description", data.description);
  // body.append("resume", data.resume!);

  // const resume = new Resume(body);
  // const retryResult = resume.post();

  // try{
  //   if (typeof result == "string") {
  //     /** post the body */
  //     setRetryCount(retryCount - 1)
  //     navigate("/response", { state: { result : retryResult, data: {...data} } });
  //   }
  // } catch(error) {
  //   console.error(error);
  // }
  //
  //}
  //<Link className={`btn btn-secondary`} to="/job_description">
  //  {"Back"}
  // </Link>

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setDraft(e.target.value);
  }
  return (
    <div className="flex flex-col items-center gap-5">
      <textarea
        defaultValue={draft}
        className="border-[1px] border-gray-300 rounded-md p-3 m-0 h-[55vh] w-full"
        onChange={(e) => handleChange(e)}
      // rows={40}
      ></textarea>
      <div className="flex justify-center items-center gap-5">

        <button
          onClick={onCopy}
          className="bg-purple-500 text-white p-3 rounded-md"
        >
          Copy
        </button>
        <Link className={`btn btn-secondary`} to="/job_description">
          {"Back"}
        </Link>

      </div>
      <ToastContainer position="top-center" />
    </div >
  );
}
