import React from "react";
import Workspace from "../Workspace/Workspace";
import Editor from "../Workspace/Editor";
import REPL from "../Workspace/REPL";
import Question from "../Workspace/Question";

function Mission() {
  return (
    <Workspace editor={<Editor />} repl={<REPL />} question={<Question />} />
  );
}

export default Mission;
