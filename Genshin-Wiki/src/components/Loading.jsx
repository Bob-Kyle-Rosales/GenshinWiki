import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loading = ({ width, height }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={width || "100%"}
      height={height || "100%"}
    >
      <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Box>
    </Box>
  );
};

export default Loading;
