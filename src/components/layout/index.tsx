// src/components/layout/index.tsx
import React, { useEffect } from "react";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import { Container } from "@components/common";
import { LayoutWrapper, Main } from "./styles";
import { LayoutProps } from "./types";

const Layout: React.FC<LayoutProps> = ({
  children,
  pageTitle = "Meu App",
  maxWidth = "lg",
  padding = true,
  hideNavbar = false,
  hideFooter = false,
}) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <LayoutWrapper>
      {!hideNavbar && <Navbar />}
      
      <Main>
        <Container 
          $maxWidth={maxWidth} 
          $padding={padding}
        >
          {children}
        </Container>
      </Main>
      
      {!hideFooter && <Footer />}
    </LayoutWrapper>
  );
};

export default Layout;