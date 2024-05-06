import { Form } from "../types/interfaces";
import { FileType } from "../types/file-type";


export class Drafter {
  #publicEndpoint : string;
  // #privateEndpoint;
  #body : FormData;

  constructor(body: FormData) {
    this.#publicEndpoint = import.meta.env.VITE_BACKEND + "/public";
    // this.#privateEndpoint = import.meta.env.VITE_BACKEND + "/private";
    this.#body = body;

  }

  get getBody() {
    return this.#body;
  }

  get getPublicEndpoint() {
    return this.#publicEndpoint;
  }


  async publicPost(): Promise<string | Error | undefined> {
    const resume = this.#body.get("resume") as Form['resume'] | null
    const subpath = resume!.type === FileType.pdf.type ? FileType.pdf.subpath : FileType.docx.subpath;



    // subpath = "/generate" 
    return fetch(this.#publicEndpoint + subpath, {
      method: "POST",
      body: this.#body,
    })
      .then(response => {
        if (response.status !== 200) {
          response.text().then(reason => { throw new Error(reason) });
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
