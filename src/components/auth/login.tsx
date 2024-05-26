import { useForm } from "react-hook-form";
import { Field } from "../common/fields";
import { Input } from "../common/input";
// import { Form } from "../common/form";
import { Button } from "../common/button";
import { Form, Link, redirect } from "react-router-dom";
import { Auth } from "../../apis/auth";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Inputs = {
  username: string;
  password: string;
};

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
  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const labelStyle =
    "flex flex-col text-xl font-semibold underline my-2 decoration-blue-200 decoration-4 ";
  return (
    <>
      <Form id="login-form" role="auth" method="post">
        <Field
          label="Username"
          labelClass={labelStyle}
          error={errors.username?.message}
        >
          <Input
            {...register("username", {
              required: "Username is required.",
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
          <Button className="bg-red-300" type="reset">
            Reset
          </Button>
          <Button>Login</Button>
        </div>
      </Form>
      <Link to="/register" />
      <ToastContainer position="top-center" />
    </>
  );
}
