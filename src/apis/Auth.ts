export class Auth {
  #endpoint : string;

  constructor() {
    this.#endpoint = import.meta.env.VITE_BACKEND + "/private/auth";
  }

  public async login(body: FormData) { 
    console.log(body);
    const {username, password } = Object.fromEntries(body);
    const token = await fetch( this.#endpoint + "/token", {
      method: "POST",
      body: JSON.stringify({username, password}),
      headers : {
        "Content-Type" : "application/json"
      }
    }).then( resp => resp.text())
    .catch( error => console.error(error));
    console.log({token})
  }
}

