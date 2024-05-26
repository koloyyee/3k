export class Auth {
  #endpoint: string;

  constructor() {
    this.#endpoint = import.meta.env.VITE_BACKEND + "/private/auth";
  }

  public async login(body: FormData){
    const { username, password } = Object.fromEntries(body);
    const resp = await fetch(this.#endpoint + "/token", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (resp.status == 200 || resp.status == 201) {
      const token = await resp.text();
      localStorage.setItem('username', username.toString());
      localStorage.setItem('token', token);

      return "success";
    } else {
      // throw new Error("Username or Password incorrect.")
      return "failed";
    }
    


  }

  public logout(): void {
    localStorage.removeItem("token")
  }

  /***
   * getBearerToken retrieve token from localStorage with "Bearer " before the token
   * this way it saves time not to type Bearer.
   */
  public getBearerToken(): string {
    const tokenJ = localStorage.getItem("token");
    if (tokenJ) {
      return "Bearer " + JSON.parse(tokenJ);
    }
    return "NO TOKEN EXIST";
  }
}

