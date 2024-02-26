
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

  async post() {
    console.log(this.#endpoint + "/upload/pdf");
    return fetch(this.#endpoint + "/upload/pdf", {
      method: "POST",
      body: this.#body,
    })
      .then(response => response.text())
      .then(data => data)
      .catch(error => console.warn(error))
  }

}
