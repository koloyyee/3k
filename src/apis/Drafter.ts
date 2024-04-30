import { Form } from "../types/interfaces";
import { FileType } from "../types/file-type";


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


  async post(): Promise<string | Error | undefined> {
    const resume = this.#body.get("resume") as Form['resume'] | null
    const subpath = resume!.type === FileType.pdf.type ? FileType.pdf.subpath : FileType.docx.subpath;


    for(const[k,v] of this.#body.entries()) {
      console.log({k,v})
    }

    // subpath = "/generate" 
    return fetch(this.getEndpoint + subpath, {
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
