import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { Auth as fbAuth } from "firebase/auth";
export class Auth {
  #endpoint: string;

  constructor() {
    this.#endpoint = import.meta.env.VITE_BACKEND + "/private/auth";
  }

  // firebase email password sign-in 
  public async login(data: { username: string, password: string }): Promise<string | Error> {
    return await signInWithEmailAndPassword(auth, data.username, data.password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log({ user })
        localStorage.setItem("uid", user.uid);
        localStorage.setItem("email", user.email!);
        user.getIdToken(true).then(token => localStorage.setItem("token", token));
        return "success";
      }).catch(error => {
        return error;
      });
  }

  public async register(auth: fbAuth, email: string, password: string): Promise<unknown> {

    return await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // call the backend to register with uid, email
        return user;
      })
      .then(user => {
        return fetch(this.#endpoint + "/register", {
          method: "POST",
          body: JSON.stringify({ userId: user.uid, email: email }),
          headers: {
            "Content-Type": "application/json"
          }
        })
      })
      .catch(error => {
        console.error(error);
      })


  }

  // deprecated 
  private async _login(body: FormData) {
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

