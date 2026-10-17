import { Button, ButtonGroup, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import FavoriteIcon from "@mui/icons-material/Favorite";

function MUIButton() {
  return (
    <div>
      <div style={{ display: "flex", gap: "16px", padding: "20px" }}>
        <Button variant="contained" color="primary">
          Send
        </Button>

        <Button variant="outlined" color="secondary">
          Cancel
        </Button>

        <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
          Delete
        </Button>

        <Button variant="contained" color="success" endIcon={<SendIcon />}>
          Send Message
        </Button>
      </div>

      <div>
        <ButtonGroup
          orientation="vertical"
          variant="contained"
          color="secondary"
        >
          <Button>Birinci Adım</Button>
          <Button>İkinci Adım</Button>
          <Button>Üçüncü Adım</Button>
        </ButtonGroup>
      </div>

      <div>
        <IconButton aria-label="beğen" color="error">
          <FavoriteIcon />
        </IconButton>

        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
}

export default MUIButton;
