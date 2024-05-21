import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const WeaponsList = ({ weapons }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#E5E7EB" }}>
            <TableCell align="center">
              <Typography variant="body1" fontWeight="bold">
                Weapon
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="body1" fontWeight="bold">
                Name
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="body1" fontWeight="bold">
                Type
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="body1" fontWeight="bold">
                Atk
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="body1" fontWeight="bold">
                Rarity
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {weapons.map((weapon) => (
            <TableRow key={weapon.id} sx={{ "&:hover": { backgroundColor: "#F3F4F6" } }}>
              <TableCell align="center">
                <img
                  src={weapon.image_url}
                  alt={weapon.name}
                  style={{ height: 64, width: "auto" }}
                />
              </TableCell>
              <TableCell align="center">
                <Typography variant="body1">{weapon.name}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body1">{weapon.type}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body1">{weapon.atk}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body1">{weapon.rarity}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeaponsList;
