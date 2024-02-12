import { Form } from "../App";

/**
 * Check if all the form has been filled.
 * Final check will also be done in the backend.
 * @param formData - useState formData type @see Form
 * @returns  
 */
export function isValid(formData: Form): boolean {
  return (
    formData.company.trim().length > 0 &&
    formData.description.trim().length > 0 &&
    formData.title.trim().length > 0 &&
    formData.resume != null
  );
}