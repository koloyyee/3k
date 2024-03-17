import { Form } from "../types/interfaces";
import { FileType } from "../util/file-type";

export class Resume {
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

  async post() : Promise<string | Error> {
    const resume = this.getBody.get("resume") as Form['resume'] | null

    const subpath : string = resume!.type === FileType.pdf ? "/upload/pdf" : "/upload/docx";

    return fetch(this.getEndpoint + subpath, {
      method: "POST",
      body: this.#body,
    })
      .then(response => {
        if (response.status !== 200) {
          console.error(response.text());
          throw new Error("something went wrong" );
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
