import React from "react";
import TextField from "@material-ui/core/TextField";
import Runner from "./../library_function/Runner";

function Editor(props) {
  const [text, setText] = React.useState("");
  return (
    <TextField
      id="outlined-multiline-static"
      label="Editor"
      multiline
      rows="37"
      PlaceHolder="Code starts here..."
      variant="outlined"
      style={{ width: "100%" }}
      value={text}
      onChange={event => props.callBack(event.target.value)}
      fullWidth
    />
  );
}

export default Editor;
