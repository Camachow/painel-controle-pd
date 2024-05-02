import { Typography, Box, Button, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ bgcolor: "#f1f1f1", py: 6, px: 6 }}
      display={"flex"}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
        display={"flex"}
        alignItems={"start"}
        gap={4}
        flexDirection={"column"}
      >
        <Box sx={{ maxWidth: "200px" }}>
          <img
            src="logo-horizontal-texto-preto.png"
            alt="Logo"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Typography sx={{ color: "black" }} fontFamily={"Rajdhani"}>
          Rua Tomé de Souza, 810, Cj 401, Savassi, Belo Horizonte/MG - CEP:
          30.140-135. PROSPERARE EDUCAÇÃO, CULTURA E CIDADANIA S.A - CNPJ nº
          10.976.971/0001-25 Todos os direitos reservados
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
        display={"flex"}
        sx={{
          alignItems: {
            xs: "start",
            sm: "start",
            md: "start",
            lg: "end",
            xl: "end",
          },
        }}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Button color="secondary" startIcon={<InstagramIcon />}>
          <a
            href="https://www.instagram.com/oprojetodesenvolve?igsh=MTc2dG45bnM3NWs5bA=="
            style={{ textDecoration: "none" }}
          >
            @oprojetodesenvolve
          </a>
        </Button>
        <Button color="secondary" startIcon={<WhatsAppIcon />}>
          <a
            href="https://api.whatsapp.com/send?phone=553131570760&text=Olá!%20"
            style={{ textDecoration: "none" }}
          >
            (31) 3157-0760
          </a>
        </Button>
      </Grid>
    </Grid>
  );
}
export default Footer;