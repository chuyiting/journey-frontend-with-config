import React, { useState } from "react";
import Editor from "./Workspace/Editor";
import Runner from "./library_function/Runner";

function Empty() {
  const [code, setCode] = React.useState("");
  const callBackFromEditor = childDate => {
    setCode(childData);
  };
  return (
    <div>
      <Editor code={code} callBack={callBackFromEditor} />
      <Runner code={code} />
    </div>
  );
}

export default Empty;
