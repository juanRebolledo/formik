import React from "react";
import { useField } from "formik";
import { FormFeedback, FormGroup, Label, Input } from "reactstrap";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormGroup>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Input
        autoComplete="off"
        invalid={meta.touched && meta.error && true}
        valid={meta.touched && !meta.error && true}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && <FormFeedback>{meta.error}</FormFeedback>}
    </FormGroup>
  );
};

export default TextInput;
