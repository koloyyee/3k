import { createUserWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useForm } from "react-hook-form";
import { Field } from "../common/fields";
import { Input } from "../common/input";
import { Button } from "../common/button";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  console.log(formData.entries())
  const email = formData.get("email");
  const password = formData.get("password");
  // const { email, password } = Object.fromEntries(formData);
  console.log({ email, password })
  // if( email && password) {
  // await createUserWithEmailAndPassword(auth, email, password )

  // }
  return null;
}
type Inputs = {
  email: string,
  password: string
}
export function FirebaseSignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<Inputs>();

  async function onSubmit(data: Inputs) {
      await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log({user});
        navigate("/private");
      })
      .catch( error => {
        console.error(error);
      })
  }

  const labelStyle =
    "flex flex-col text-xl font-semibold underline my-2 decoration-blue-200 decoration-4 ";

  return (
    <>
      {/* <Form id="signup-form" role="auth" method="post"> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          label="Email"
          labelClass={labelStyle}
          error={errors.email?.message}
        >
          <Input
            {...register("email", {
              required: "Email is required",
              minLength: {
                value: 1,
                message: "Email too short"
              },
              maxLength: {
                value: 255,
                message: "Email too long"
              },
            })}
            id="email"
            type="email"
            disabled={isSubmitting}
          />
        </Field>

        <Field
          label="Password"
          labelClass={labelStyle}
          error={errors.password?.message}
        >
          <Input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "must be over 8."
              },
              maxLength: {
                value: 255,
                message: "password too long"
              },
            })}
            id="password"
            disabled={isSubmitting}
            type="password"
          />
        </Field>
        <div className="flex gap-10">
          {/* {isValid ? */}
          <Button
          >Sign Up</Button>
        </div>
      </form>
      {/* </Form> */}
    </>
  );
}