import React from "react";
import logo from "/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";

const NavBar = () => {
  const linkClass = ({ isActive }) => ({
    color: isActive ? "white" : "inherit",
    textDecoration: "none",
    padding: "8px 16px",
    borderBottom: isActive ? "2px solid white" : "none",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  });

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "rgba(47, 79, 79, 0.8)", padding: "8px 6rem" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" style={{ height: 96, width: "auto" }} />
          </NavLink>
        </Box>
        <Box display="flex" alignItems="center">
          <Button component={NavLink} to="/" sx={linkClass} variant="text">
            Home
          </Button>
          <Button component={NavLink} to="/characters" sx={linkClass} variant="text">
            Characters
          </Button>
          <Button component={NavLink} to="/weapons" sx={linkClass} variant="text">
            Weapons
          </Button>
          <Button component={NavLink} to="/artifacts" sx={linkClass} variant="text">
            Artifacts
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
