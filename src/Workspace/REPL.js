import React from "react";
import Paper from "@material-ui/core/Paper";
import Runner from "./../library_function/Runner";
const style = {
  height: 365
};

function REPL() {
  return (
    <div>
      <Paper style={style}>
        <Runner />
      </Paper>
    </div>
  );
}

export default REPL;
