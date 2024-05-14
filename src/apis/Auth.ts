export class Auth {
  #endpoint : string;

  constructor() {
    this.#endpoint = import.meta.env.VITE_BACKEND + "/private/auth";
  }

  public login(body: FormData) { 
    console.log(body);
    const {username, password } = Object.fromEntries(body);
    fetch( this.#endpoint + "/token", {
      method: "POST",
      body: JSON.stringify({username, password}),
      headers : {
        "Content-Type" : "application/json"
      }
    }).then( resp => resp.text())
    .then(token => console.log(token))
    .catch( error => console.error(error));
  }
}

