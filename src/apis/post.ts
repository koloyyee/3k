// const endpoint = import.meta.env.VITE_BACKEND;

export class Resume {
  #endpoint ; 
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

  // async post() {
  //   return fetch(this.#endpoint, {
  //     method: "POST",
  //     body: this.#body,
  //     headers : {
  //       "content-type" : "multipart-form/form-data"
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(data => data)
  //   .catch(error => console.warn(error))
  // }

  async post() {
    return setTimeout(() => true, 500);
  }
}