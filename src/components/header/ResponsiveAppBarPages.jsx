import * as React from "react";
import { useRef } from "react";
import "../header/header.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import Logo from "../../assets/header/logo.svg";
import { NavLink } from "react-router-dom";

// Help Functions //
export const changeBorderRightColor = (mode) => {
  let borderRightColor;

  if (mode === "light") {
    return (borderRightColor = "1px solid #909090");
  }
  if (mode === "dark") {
    return (borderRightColor = "1px solid #f3f3f3");
  }
};

const pages = [
  <NavLink
    to="/"
    style={({ isActive }) => ({
      color: isActive ? "#a7c8f7" : "inherit",
    })}
  >
    Home
  </NavLink>,
  <NavLink
    to="/about"
    style={({ isActive }) => ({
      color: isActive ? "#a7c8f7" : "inherit",
    })}
  >
    About me
  </NavLink>,
  <NavLink
    to="/projects"
    style={({ isActive }) => ({
      color: isActive ? "#a7c8f7" : "inherit",
    })}
  >
    Projects
  </NavLink>,
  <NavLink
    to="/articles"
    style={({ isActive }) => ({
      color: isActive ? "#a7c8f7" : "inherit",
    })}
  >
    Articles
  </NavLink>,
];

function ResponsiveAppBarPages({ theme }) {
  const { mode } = theme.palette;

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        color: "inherit",
        backgroundColor: "inherit",
        backgroundImage: "none",
        boxShadow: "none",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img className="logo" alt="logo" src={Logo} />
        <Container maxWidth="xl" id="btn__mobile">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <Button
                  className="main-nav-link"
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    paddingRight: "2em",
                    paddingLeft: "2em",
                    color: "inherit",
                    textTransform: "none",
                    display: "block",
                    fontSize: "1.2em",
                    borderRight: changeBorderRightColor(mode),
                    borderRadius: "0px",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "transparent",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
}
export default ResponsiveAppBarPages;
