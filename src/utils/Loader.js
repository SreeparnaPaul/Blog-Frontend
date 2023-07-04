import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
export const Loader = (loader) => {
  return (
    <div>
      <Backdrop
        sx={{ color: "#1A509E", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader.loader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};