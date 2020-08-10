import React from "react";
import { useField } from "formik";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <FormGroup>
      <Label className="checkbox">
        <Input type="checkbox" {...field} {...props} />
        {children}
      </Label>
      {meta.touched && meta.error && <FormFeedback style={{display: "block"}}>{meta.error}</FormFeedback>}
    </FormGroup>
  );
};

export default Checkbox;
