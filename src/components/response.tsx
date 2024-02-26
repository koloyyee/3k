import { useState } from "react";
import { useCopy } from "../util/use-copy-hook";
import { ToastContainer, toast } from "react-toastify";

export function Response({ response }: { response: string }) {
  const [_, copy] = useCopy();
  const [draft, setDraft] = useState<string>("");

  function onCopy() {
    copy(draft);
    toast.success("Copied to clipboard!");
  }
  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setDraft(e.target.value);
  }
  function exit() {
    window.opener = null;
    window.open("", "_self");
    window.close();
  }

  return (
    <div className="flex flex-col h-screen items-center gap-5">
      <textarea
        className="border-[1px] border-gray-300 rounded-md p-3 m-0 h-[70vh]"
        defaultValue={response}
        onChange={(e) => handleChange(e)}
        rows={50}
        cols={100}
      ></textarea>
      <div className="flex gap-5">
      <button onClick={exit} className="bg-red-500 text-white p-3 rounded-md">
          Close the Window
        </button>
        <button
          onClick={onCopy}
          className="bg-purple-500 text-white p-3 rounded-md"
        >
          Copy
        </button>
      </div>
      <ToastContainer position="top-center"/>
    </div>
  );
}
