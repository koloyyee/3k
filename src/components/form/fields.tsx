import React, { ReactNode } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export function getChildrenId (children: ReactNode){
  const child = React.Children.only(children);
  if("id" in child?.props){
    return child?.props.id;
  }
}

export function Field({children, label,labelClass, error}: {children: ReactNode, label: string,labelClass :string, error: FieldError| Merge<FieldError, FieldErrorsImpl<any>> | undefined}) {

  const id = getChildrenId(children);
  return(
    <div className="col-sm-12 mb-3">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {error && <small className="error">{error?.message} </small>}
    </div>
  )
}