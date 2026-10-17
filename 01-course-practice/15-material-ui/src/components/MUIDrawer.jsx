import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MailIcon from "@mui/icons-material/Mail";

function MUIDrawer() {
  const [ısOpenMenu, setIsOpenMenu] = useState(false);

  const toggleDrawer = (durum) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpenMenu(durum);
  };

  const menuIcerigi = () => (
    <Box
      sx={{ width: 250 }} // Menü genişliği
      role="presentation"
      onClick={toggleDrawer(false)} // Linke tıklanınca menüyü kapat
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Ana Sayfa" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Hakkımızda" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="İletişim" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button variant="contained" onClick={toggleDrawer(true)}>
        Open Menu
      </Button>

      <Drawer anchor="left" open={ısOpenMenu} onClose={toggleDrawer(false)}>
        {menuIcerigi()}
      </Drawer>
    </div>
  );
}

export default MUIDrawer;
