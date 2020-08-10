import React from "react";

export default function FormikState({ values }) {
  return (
    <div className="json">
      <pre>
        {JSON.stringify(values, null, 2)}
      </pre>
    </div>
  );
}
