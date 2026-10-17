import { Box } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Honda from "../images/Honda.jpg";

function MUICard() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 4,
        bgcolor: "#f5f5f5",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={Honda}
          alt="Honda Civic"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Honda Civic
          </Typography>

          <Typography variant="body2" color="text.secondry">
            Honda Civic, Honda tarafından ilk olarak küçük araç olarak
            üretilmeye başlandı. Küçük araç olarak üretilen Civic, zamanla
            değişikliklere uğrayarak hem daha lüks hem de boyut olarak daha
            büyüyerek kompakt araç sınıfına doğru adım atmış oldu.
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small">Satın Al</Button>
          <Button size="small">İletişim</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default MUICard;
