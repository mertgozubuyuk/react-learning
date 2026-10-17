import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "./TabPanel";

function MUITabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 600, margin: "auto", mt: 4 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Profile" />
          <Tab label="About" />
          <Tab label="Contact" />
        </Tabs>

        <TabPanel value={value} index={0}>
          Mert Gözübüyük
        </TabPanel>
        <TabPanel value={value} index={1}>
          Student at Beykoz University
        </TabPanel>
        <TabPanel value={value} index={2}>
          mertberk138@gmail.com
        </TabPanel>
      </Box>
    </Box>
  );
}

export default MUITabs;
