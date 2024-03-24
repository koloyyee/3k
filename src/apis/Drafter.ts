import { Form } from "../types/interfaces";
import { FileType } from "../util/file-type";

const ext = {
  PDF: "pdf",
  DOCX: "docx"
} as const

export class Drafter {
  #endpoint;
  #body;

  constructor(body: FormData) {
    this.#endpoint = import.meta.env.VITE_BACKEND;
    this.#body = body;

  }

  get getBody() {
    return this.#body;
  }

  get getEndpoint() {
    return this.#endpoint;
  }

  async preload(): Promise<string | void | Error> {

    const resume = this.#body.get("resume") as Form['resume'] | null
    const fileType = resume!.type === FileType.pdf ? ext.PDF : ext.DOCX;

      

    return await fetch(this.getEndpoint + "/preload/" + fileType, {
      method: "POST",
      body: this.#body
    }).then(response => {
      if (response.status !== 200) {
        throw new Error("upload failed")
      }
    })

  }

  async post(): Promise<string | Error> {
    const resume = this.#body.get("resume") as Form['resume'] | null
    const subpath = resume!.type === FileType.pdf ? "/upload/pdf" : "/upload/docx";
    // subpath = "/generate" 
    return fetch(this.getEndpoint + subpath, {
      method: "POST",
      body: this.#body,
    })
      .then(response => {
        if (response.status !== 200) {
          console.error(response.text());
          throw new Error("something went wrong");
        } else {
          return response.text();
        }
      })
      .then(data => data)
      .catch(error => {
        console.warn(error);
        throw new Error(error);
      })
  }

}
