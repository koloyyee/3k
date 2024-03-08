import { useState } from "react";
import { useCopy } from "../util/use-copy-hook";
import { ToastContainer, toast } from "react-toastify";
import { Props } from "../types/types";
import { Link, useLocation } from "react-router-dom";

export function Response() {
  const [_, copy] = useCopy();
  const { state } = useLocation();
  const { result } = state;
  const [draft, setDraft] = useState(result);

  function onCopy() {
    copy(draft);
    console.log(draft);
    toast.success("Copied to clipboard!");
  }
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
        {/* <button
              onClick={exit}
              className="bg-red-500 text-white p-3 rounded-md"
            >
              Close the Window
            </button> */}
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
    </div>
  );
}
