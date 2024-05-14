import { Dispatch, SetStateAction } from "react";
import { IForm } from "./interfaces";

export type Props = {
  stepNum: number;
  formData: IForm;
  setFormData : Dispatch<SetStateAction<IForm>>
  withCallback?: boolean;
};
