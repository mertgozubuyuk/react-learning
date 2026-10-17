import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function MUIProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box>
      <CircularProgress aria-label="Loading…" />
      <br />
      <br />
      <LinearProgress aria-label="Loading…" color="error" />
      <br />
      <br />
      <LinearProgress
        variant="determinate"
        value={progress}
        aria-label="Export data"
      />
    </Box>
  );
}

export default MUIProgress;
