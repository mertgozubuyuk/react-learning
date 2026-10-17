import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";

function MUITooltip() {
  return (
    <div style={{display:"flex", justifyContent:"center", marginTop:"100px", gap:"20px"}}>
      <Tooltip title="delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="info" placement="top">
        <IconButton>
          <InfoIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default MUITooltip;
