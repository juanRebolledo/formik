import * as Yup from "yup";

export const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    acceptedTerms: false,
  }

export const validationSchema = Yup.object({
  firstName: Yup.string().max(15, "15 or less characters").required("Required"),
  lastName: Yup.string().max(25, "25 or less characters").required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  acceptedTerms: Yup.boolean()
    .required("Required")
    .oneOf([true], "You must accept the terms and conditions."),
});

export function onSubmit(values, { setSubmitting, resetForm }) {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    resetForm();
  }, 400);
}
