import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Loading() {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        zIndex: 1300,
      }}
    >
      <CircularProgress aria-label="Loading…" size={52} thickness={4} />
    </Box>
  );
}

export default Loading;
