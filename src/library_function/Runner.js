import React from "react";

function Runner(props) {
  let outputValue;
  try {
    outputValue = eval(props.code);
  } catch (errorMessage) {
    return <p style="color: red">{errorMessage}</p>;
  }
  if (outputValue.$canvas !== undefined) {
    return outputValue.$canvas;
  } else if (outputValue !== undefined) {
    return <p>{outputValue}</p>;
  }
  props.callBack();
}

export default Runner;
