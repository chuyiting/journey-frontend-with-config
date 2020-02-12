import React from "react";
import Paper from "@material-ui/core/Paper";
const style = {
  height: 365
};

function Question() {
  return (
    <div>
      <Paper style={style}>
        <img src="question.png" width="100%" />
      </Paper>
    </div>
  );
}

export default Question;
