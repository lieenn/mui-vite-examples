import { Route, Routes } from "react-router-dom";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copyright from "./Copyright";
import MuiTable from "./components/MuiTable";
import DetailPage from "./components/DetailPage";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Vite.js
        </Typography>
        <Routes>
          <Route path="/" element={<MuiTable />} />
          <Route path=":value" element={<DetailPage />} />
        </Routes>
        <Copyright />
      </Box>
    </Container>
  );
}
