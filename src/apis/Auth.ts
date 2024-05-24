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
}

