import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  useMediaQuery,
  useTheme,
  Drawer,
  IconButton,
  Button,
} from "@mui/material";
import { IoMdMenu } from "react-icons/io";
import logo from "/logo.png"; // Ensure this path is correct based on your project structure

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const linkClass = ({ isActive }) => ({
    color: isActive ? "white" : "inherit",
    textDecoration: "none",
    padding: "8px 16px",
    borderBottom: isActive ? "2px solid white" : "none",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  });

  const renderNavLinks = () => (
    <>
      <Button component={NavLink} to="/" sx={linkClass} onClick={handleCloseDrawer}>
        Home
      </Button>
      <Button component={NavLink} to="/characters" sx={linkClass} onClick={handleCloseDrawer}>
        Characters
      </Button>
      <Button component={NavLink} to="/weapons" sx={linkClass} onClick={handleCloseDrawer}>
        Weapons
      </Button>
      <Button component={NavLink} to="/artifacts" sx={linkClass} onClick={handleCloseDrawer}>
        Artifacts
      </Button>
    </>
  );

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "rgba(47, 79, 79, 0.8)", padding: { xs: "8px 1rem", md: "8px 6rem" } }}
    >
      <Toolbar>
        <NavLink to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src={logo} alt="logo" style={{ height: 96, width: "auto", marginRight: "16px" }} />
        </NavLink>
        <Box sx={{ marginLeft: "auto", display: { xs: "none", md: "flex" } }}>
          {renderNavLinks()}
        </Box>
        {isMobile && (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ ml: "auto" }}
              onClick={handleDrawerToggle}
            >
              <IoMdMenu />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
              <Box
                sx={{ p: 3, display: "flex", flexDirection: "column", alignItems: "flex-start" }}
              >
                {renderNavLinks()}
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
