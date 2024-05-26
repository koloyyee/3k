export class Auth {
  #endpoint: string;

  constructor() {
    this.#endpoint = import.meta.env.VITE_BACKEND + "/private/auth";
  }

  public async login(body: FormData): { status: number, message: String } {
    const { username, password } = Object.fromEntries(body);
    const resp = await fetch(this.#endpoint + "/token", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    return { status: resp.status, message: await resp.text() };

  }

  public logout() :void {
    localStorage.removeItem("token")
  }

  /***
   * getBearerToken retrieve token from localStorage with "Bearer " before the token
   * this way it saves time not to type Bearer.
   */
  public getBearerToken() : string{
   const tokenJ= localStorage.getItem("token");
   if(tokenJ) {
    return "Bearer " +  JSON.parse(tokenJ);
   }
   return "NO TOKEN EXIST";
  }
}

