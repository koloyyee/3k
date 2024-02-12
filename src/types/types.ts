import { Dispatch, SetStateAction } from "react";
import { Form } from "./interfaces";

export type Props = {
  stepNum: number;
  formData: Form;
  setFormData : Dispatch<SetStateAction<Form>>
  withCallback?: boolean;
};
