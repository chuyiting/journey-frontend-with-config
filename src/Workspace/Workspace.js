import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

function Workspace(props) {
  return (
    <div>
      <Grid container spacing={1} style={{ marginTop: -40 }}>
        <Grid item md xs={12}>
          {props.editor}
        </Grid>
        <Grid item md>
          <Grid container direction="column" spacing={1}>
            <Grid item md>
              {props.repl}
            </Grid>
            <Grid item md>
              {props.question}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Workspace;
