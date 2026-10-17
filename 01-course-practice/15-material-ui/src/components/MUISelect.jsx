import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

function MUISelect() {
  const [city, setCity] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        width: "300px",
        padding: "20px",
      }}
    >
      <FormControl fullWidth>
        <InputLabel>Select a city</InputLabel>
        <Select
          value={city}
          label="Select a city"
          onChange={(e) => setCity(e.target.value)}
        >
          <MenuItem value="istanbul">İstanbul</MenuItem>
          <MenuItem value="ankara">Ankara</MenuItem>
          <MenuItem value="izmir">İzmir</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default MUISelect;
