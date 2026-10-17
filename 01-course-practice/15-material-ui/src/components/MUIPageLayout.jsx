import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function MUIPageLayout() {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", p: 3, minHeight: "100vh" }}>
      {/* Üst Bilgi Kutusu */}
      <Box>
        <Typography variant="h5">Yönetim Paneli</Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ bgcolor: "white", p: 3, borderRadius: 2, height: "100%" }}>
            <Typography variant="h6">Sol Menü</Typography>
            <p>Navigasyon linkleri burada yer alabilir.</p>
          </Box>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Box sx={{ bgcolor: "white", p: 3, borderRadius: 2 }}>
            <Typography variant="h6">Ana İçerik Alanı</Typography>
            <p>Burası formların veya tabloların olacağı geniş alandır.</p>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 3 }}
            >
              <Button variant="contained" color="success">
                Kaydet
              </Button>
              <Button variant="outlined" color="error">
                Vazgeç
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MUIPageLayout;
