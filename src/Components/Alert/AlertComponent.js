import React, { useState } from "react";
import { Snackbar, Alert } from "@mui/material";

const AlertComponent = (props) => {
  const { open, handleClose } = props;
  return (
    <div>
      {" "}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Successfully Submitted!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AlertComponent;
