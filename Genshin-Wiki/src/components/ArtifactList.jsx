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

const ArtifactList = ({ artifacts }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#E5E7EB" }}>
            <TableCell align="center" sx={{ width: "20%" }}>
              <Typography variant="body1" fontWeight="bold">
                Name
              </Typography>
            </TableCell>
            <TableCell align="center" sx={{ width: "40%" }}>
              <Typography variant="body1" fontWeight="bold">
                2_set_bonus
              </Typography>
            </TableCell>
            <TableCell align="center" sx={{ width: "40%" }}>
              <Typography variant="body1" fontWeight="bold">
                4_set_bonus
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {artifacts.map((artifact) => (
            <TableRow key={artifact.id} sx={{ "&:hover": { backgroundColor: "#F3F4F6" } }}>
              <TableCell align="center">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={artifact.image_url}
                    alt={artifact.name}
                    style={{ height: 80, width: "auto" }}
                  />
                  <Typography variant="body1" ml={2}>
                    {artifact.name}
                  </Typography>
                </div>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body1">{artifact["2_set_bonus"]}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body1">{artifact["4_set_bonus"]}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ArtifactList;
