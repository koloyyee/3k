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
 * {@link useLocation} allow use to pass the props from one component to here.
 * in this case from result in an object `state` 
 * from {@link JobDescription} to {@link Response}.
 * 
 * TODO: Implementing a max of 3 retry due to RPM and token exceed concern.
 * @returns React Component
 */
export function Response() {
  const [_, copy] = useCopy();
  const { state } = useLocation(); 
  const { result } = state;
  const [draft, setDraft] = useState(result);
  // const [retryCount, setRetryCount] = useState(3);
  const resp = JSON.parse(draft);

  function onCopy() {
    copy(resp.content.replace("DRAFT", ""));
    toast.success("Copied to clipboard!");
  }

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setDraft(e.target.value);
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <textarea
        defaultValue={resp.content}
        className="border-[1px] border-gray-300 rounded-md p-3 m-0 h-[55vh] w-full"
        onChange={(e) => handleChange(e)}
      // rows={40}
      ></textarea>
      <div className="flex justify-center items-center gap-5">

        <Link className={`btn btn-secondary`} to="/">
          {"Back"}
        </Link>

        <button
          onClick={onCopy}
          className="bg-purple-500 text-white p-3 rounded-md"
        >
          Copy
        </button>
      </div>
      <ToastContainer position="top-center" />
    </div >
  );
}
