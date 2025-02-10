"use client";

import MusicPlayerSlider from "@/component/LoadingButton";
import { Box, Button } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  function alert() {
    setLoading(!loading);
  }

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        flexDirection="column"
      >
        <div>{loading && <MusicPlayerSlider />}</div>
        <Box mt={2}>
          <Button onClick={alert} variant="contained" color="success">
            {loading ? "close" : "open"}
          </Button>
        </Box>
      </Box>
    </>
  );
}
