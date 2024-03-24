/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type FieldProps = {
  children: ReactNode;
  label: string;
  labelClass: string;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
};

export function getChildrenId(children: ReactNode) {
  const child = React.Children.only(children) as React.ReactElement<any>;
  if ("id" in child.props) {
    return child?.props.id;
  }
}

export function Field({ children, label, labelClass, error }: FieldProps) {

  const id = getChildrenId(children);
  return (
    <div className="flex flex-col col-sm-12 mb-3">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {error && <span className="text-red-400">{error as string} </span>}
    </div>
  )
}
