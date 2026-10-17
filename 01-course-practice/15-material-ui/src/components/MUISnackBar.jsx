import React, { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function MUISnackBar() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <div>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>

      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
  return (
    <div>
      <Button onClick={handleClickOpen}>Open Snackbar</Button>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />
    </div>
  );
}

export default MUISnackBar;
