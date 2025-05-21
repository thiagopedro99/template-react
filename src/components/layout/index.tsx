import React from "react";
import { Box } from "@mui/material";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import { LayoutProps } from "./types";

const Layout: React.FC<LayoutProps> = ({
  children,
  pageTitle = "Tendendê",
  padding = 0,
  hideNavbar = false,
  hideFooter = false, // Certifique-se de que essa prop existe e tem valor padrão
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <title>{pageTitle}</title>
      {!hideNavbar && <Navbar />}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: padding,
        }}
      >
        {children}
      </Box>
      {!hideFooter && <Footer />}{" "}
      {/* Certifique-se de que isso está condicionado corretamente */}
    </Box>
  );
};

export default Layout;
