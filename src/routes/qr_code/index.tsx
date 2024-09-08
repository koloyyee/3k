import { Input } from "@/components/common/input";
import { useState } from "react";
import QRCode from "react-qr-code";


export async function action({ request }: { request: Request }) {
  const api = import.meta.env.VITE_BACKEND + "/qr"
  const formData = await request.formData();
  const input = formData.get("link") as string;
  try {
    const url = new URL(input);
    const result = await fetch(api, {
      method: request.method,
      headers: {
        "Content-Type": "application/json"
      },
      body: formData
    })
  } catch (error) {
    console.error(error);
  }
  return null;
}

export default function QRCodeGenerator() {

  const [inputVal, setInputVal] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const val = event.currentTarget.value;
    setInputVal(val);
  }

  return (
    <div className="bg-slate-50 h-[calc(100dvh) md:h-screen">
      <h1> Create your QR Code</h1>
      {/* <Form method="POST"  >
        <Input name="link" type="text" aria-label="linkToQR" />
        <Button type="submit"> Submit</Button>
      </Form> */}
      <Input name="link" type="text" aria-label="linkToQR" onChange={handleChange} />
      { inputVal !== "" ? 

      <QRCode
        style={{ height: "100px", maxWidth: "50%", width: "50%" }}
        value={inputVal}
        viewBox={`0 0 256 256`}
      />
       : 
       <div>
        <h2> Type something to see the QR Code</h2>
       </div>
      }
    </div>

  );
}