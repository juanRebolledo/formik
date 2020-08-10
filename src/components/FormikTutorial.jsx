import React from "react";
import { Formik, Form } from "formik";
import { Button } from "reactstrap";

import { validationSchema, onSubmit, initialValues } from "./Util/Formik";

import TextInput from "./FormUtilities/TextInput";
import Checkbox from "./FormUtilities/Checkbox";
import FormikState from "./FormUtilities/FormikState";

export default function FormikTutorial() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <>
          <Form onSubmit={props.handleSubmit}>
            <h1>Welcome</h1>
            <TextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Put your Firstname"
            />
            <TextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Put your Lastname"
            />
            <TextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Put your email"
            />
            <Checkbox name="acceptedTerms">
              I accept the terms and conditions
            </Checkbox>
            <Button color="primary" type="submit" disabled={props.isSubmitting}>
              Submit
            </Button>
          </Form>
          <FormikState values={props} />
        </>
      )}
    </Formik>
  );
}
