import { useForm } from "react-hook-form";
import { Field } from "../common/fields";
import { Input } from "../common/input";
import { Button } from "../common/button";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { Auth } from "../../apis/auth";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { BackButton } from "../common/back-button";

type Inputs = {
  username: string;
  password: string;
};

// the React router dom way of submitting.
export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const auth = new Auth();
  const resp = await auth.login(formData);
  console.log({ localStorage });
  if (resp === "success") {
    return redirect("/private");
  } else {
    return null;
  }
  // try{

  // const result = await toast.promise(auth.login(formData), {
  //   pending : "Logging In",
  //   success: "Welcome back! " + formData.get("username"),
  //   error: "Username or password incorrect."
  // })
  // if(result === "success") {
  //   return redirect("/private");
  // } else {
  //   return null;
  // }
  // } catch (error) {
  //   console.error(error);
  // }
}
/**
 * Login a user
 * TODO: 
 * 1. error message for failed login.
 */
export function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  async function onSubmit(data: Inputs) {
    console.log(data);
    const auth = new Auth();
    const resp = await auth.login(data);
    if (resp === "success") {
      const uid = localStorage.getItem("uid");
      navigate("/private");
    } else {
      console.log(resp);
    }
  }

  const labelStyle =
    "flex flex-col text-xl font-semibold underline my-2 decoration-blue-200 decoration-4 ";
  return (
    <>
      {/* <Form id="login-form" role="auth" method="post"> */}
      <form
        className="flex flex-col items-end gap-5"
        onSubmit={handleSubmit(onSubmit)}>
        <Field
          label="Email"
          labelClass={labelStyle}
          error={errors.username?.message}
        >
          <Input
            {...register("username", {
              required: "Email is required.",
              minLength: {
                value: 1,
                message: "Password or Username is incorrect",
              },
            })}
            id="username"
            disabled={isSubmitting}
          />
        </Field>
        <Field
          label="Password"
          labelClass={labelStyle}
          error={errors.username?.message}
        >
          <Input
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 1,
                message: "Password or Username is incorrect",
              },
            })}
            id="password"
            disabled={isSubmitting}
            type="password"
          />
        </Field>
        <div className="flex gap-10">
          <Button>Login</Button>
        </div>
      </form>
        <Link className="mt-5" to="/register" > No Account? Register </Link>
        <BackButton />
      <ToastContainer position="top-center" />
    </>
  );
}
