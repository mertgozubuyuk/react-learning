import React, { useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "@mui/material";

function MUICheckbox() {
  const [isConfirm, setIsConfirm] = useState(false);

  const submit = () => {
    if (!isConfirm) {
      alert("Please confirm the form.");
    } else {
      alert("Your form has been successfully submitted.");
    }
  };

  return (
    <Box>
      <FormControlLabel
        control={
          <Checkbox
            checked={isConfirm}
            onChange={(e) => setIsConfirm(e.target.checked)}
            color="success"
          />
        }
        label="I accept the terms of use."
      />
      <Button onClick={submit} variant="contained">
        Submit
      </Button>
    </Box>
  );
}

export default MUICheckbox;
