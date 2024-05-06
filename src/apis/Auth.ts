class Auth {
  #body: FormData;
  #endpoint : string;

  constructor(body:FormData) {
    this.#body = body;
    this.#endpoint = import.meta.env.VITE_BACKEND + "/private/auth";
  }

  public login() { 
    console.log(this.#body)
    console.log(this.#endpoint)
  }
}

