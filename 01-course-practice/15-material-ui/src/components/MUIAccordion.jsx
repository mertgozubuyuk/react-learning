import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

function MUIAccordion() {
  const [openPanel, setOpenPanel] = useState(false);

  const handleChange = (panelName) => (event, isExpanded) => {
    setOpenPanel(isExpanded ? panelName : false);
  };
  return (
    <Box sx={{ width: "100%", maxWidth: 600, margin: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Sıkça sorulan sorular
      </Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">Kargo ücreti ne kadar?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            500 TL ve üzeri siparişlerde kargo ücretsizdir. Altındaki siparişler
            için sabit 39.90 TL kargo ücreti alınmaktadır.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <br />
      <Typography variant="h6" gutterBottom>
        Ayarlar (Kontrollü Accordion)
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        * Biri açıldığında diğeri otomatik kapanır.
      </Typography>

      <Accordion
        expanded={openPanel === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Kişisel Bilgiler</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ad, soyad ve doğum tarihi değiştirme formu burada yer alacak.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={openPanel === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Güvenlik ve Şifre</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Şifre yenileme ve iki adımlı doğrulama ayarları burada yer alacak.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default MUIAccordion;
