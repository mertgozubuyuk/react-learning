import React, { useState } from 'react';
import Box from '@mui/material/Box';


function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3, bgcolor: "#f9f9f9", minHeight: 150 }}>{children}</Box>
      )}
    </div>
  );
}

export default TabPanel;
