
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
    return fetch(this.#endpoint + "/upload/pdf", {
      method: "POST",
      body: this.#body,
    })
      .then(response => {
        if (response.status !== 200) {
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
