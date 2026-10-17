import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { InputAdornment } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

function MUITextField() {
  const [name, setName] = useState("");

  return (
    <div>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "300px",
          padding: "20px",
        }}
      >
        {/* Standart Kullanım */}
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Şifre Kutusu */}
        <TextField label="Password" type="password" variant="filled" />

        {/* Hata Durumu Gösterimi */}
        <TextField
          label="e-mail"
          variant="outlined"
          error={true}
          helperText="You entered an invalid e-mail address"
        />

        {/* Çok Satırlı Kullanım */}
        <TextField label="Massage" multiline rows={4} variant="outlined" />

        <TextField
          label="Name"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
    </div>
  );
}

export default MUITextField;
