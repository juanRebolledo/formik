import React from "react";
import { Container } from "reactstrap";

import FormikTutorial from "./components/FormikTutorial";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "2em"
        }}
      >
        <FormikTutorial />
      </Container>
    </div>
  );
}

export default App;
