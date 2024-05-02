import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const settings = ["Ajuda Humana", "Falar com IA"];

function Header() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ bgcolor: "#FFF", width: "100%" }}>
      <Container
        maxWidth={false}
        sx={{
          m: 0,
          p: 0,
          py: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              maxWidth: "200px",
              padding: { xs: "1rem", sm: 0 },
            }}
          >
            <a href="">
              <img
                src="logo-horizontal-texto-preto.png"
                alt="Logo"
                style={{ width: "100%", height: "auto", paddingLeft: "1rem" }}
              />
            </a>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Abrir opções">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ pr: 2 }}
                size="large"
                aria-label="Abrir barra de opções"
                aria-controls="menu-appbar"
                aria-haspopup="true"
              >
                <ContactSupportIcon sx={{ color: "black", fontSize: "2rem" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <a
                    href={
                      setting === "Ajuda Humana"
                        ? "https://api.whatsapp.com/send?phone=553131570760&text=Olá!%20"
                        : "https://www.chatbase.co/chatbot-iframe/j6Edl016YlSYDnyyKXgIq"
                    }
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography
                      textAlign="center"
                      fontSize="1.1rem"
                      sx={{ px: 2 }}
                    >
                      {setting}
                    </Typography>
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
