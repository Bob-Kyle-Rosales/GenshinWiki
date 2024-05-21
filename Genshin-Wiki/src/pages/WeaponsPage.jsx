import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useData } from "../context/DataContext";
import WeaponsList from "../components/WeaponsList";
import { Button, Typography, Box } from "@mui/material";
import { alpha } from "@mui/material/styles";

const WeaponsPage = () => {
  const { weapons } = useData();

  // pagination
  const weaponsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastWeapon = currentPage * weaponsPerPage;
  const indexOfFirstWeapon = indexOfLastWeapon - weaponsPerPage;
  const currentWeapons = weapons.slice(indexOfFirstWeapon, indexOfLastWeapon);

  const totalPages = Math.ceil(weapons.length / weaponsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPaginationButtons = () => (
    <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
      <Button
        onClick={handlePrevPage}
        variant="contained"
        color="warning"
        disabled={currentPage === 1}
        sx={{ mx: 1 }}
      >
        &lt;&lt; Back
      </Button>
      <Typography variant="body1" sx={{ mx: 1 }}>
        Page {currentPage} of {totalPages}
      </Typography>
      <Button
        onClick={handleNextPage}
        variant="contained"
        color="warning"
        disabled={currentPage === totalPages}
        sx={{ mx: 1 }}
      >
        Next &gt;&gt;
      </Button>
    </Box>
  );
  // pagination

  return (
    <Box display="flex" justifyContent="center">
      <Box
        sx={{
          bgcolor: alpha("#f5f5f5", 0.9),
          p: 8,
          my: 10,
          borderRadius: 4,
          width: "75%",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Weapons
        </Typography>
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button variant="contained" color="primary" component={NavLink} to="add" sx={{ mr: 2 }}>
            Add Weapons
          </Button>
        </Box>
        <Box border={1} borderColor="gold" p={4} mt={4} borderRadius={4}>
          <WeaponsList weapons={currentWeapons} />
          {renderPaginationButtons()}
        </Box>
      </Box>
    </Box>
  );
};

export default WeaponsPage;
