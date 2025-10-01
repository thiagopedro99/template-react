// src/components/navbar/index.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Flex } from "@components/common";
import {
  Nav,
  Logo,
  DesktopMenu,
  MenuLink,
  MobileMenuButton,
  MobileMenu,
  MobileMenuLink,
  Overlay,
  CloseButton,
  HamburgerIcon,
  CloseIcon,
} from "./styles";

interface MenuItem {
  label: string;
  path: string;
}

interface NavbarProps {
  logo?: string;
  menuItems?: MenuItem[];
}

const defaultMenuItems: MenuItem[] = [
  { label: "Home", path: "/" },
  { label: "Sobre", path: "/sobre" },
  { label: "Serviços", path: "/servicos" },
  { label: "Contato", path: "/contato" },
];

const Navbar = ({ 
  logo = "Logo", 
  menuItems = defaultMenuItems 
}: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => setMobileOpen(!mobileOpen);
  
  const handleNavigation = (path: string) => {
    setMobileOpen(false);
    navigate(path);
  };

  return (
    <>
      <Nav>
        <Container $maxWidth="xl">
          <Flex $justify="between" $align="center" style={{ height: '64px' }}>
            <Logo to="/">{logo}</Logo>

            <DesktopMenu>
              {menuItems.map((item) => (
                <MenuLink key={item.path} to={item.path}>
                  {item.label}
                </MenuLink>
              ))}
            </DesktopMenu>

            <MobileMenuButton onClick={handleToggle} aria-label="Menu">
              <HamburgerIcon />
            </MobileMenuButton>
          </Flex>
        </Container>
      </Nav>

      <Overlay $isOpen={mobileOpen} onClick={handleToggle} />

      <MobileMenu $isOpen={mobileOpen}>
        <CloseButton onClick={handleToggle} aria-label="Fechar menu">
          <CloseIcon />
        </CloseButton>

        {menuItems.map((item) => (
          <MobileMenuLink
            key={item.path}
            to={item.path}
            onClick={() => handleNavigation(item.path)}
          >
            {item.label}
          </MobileMenuLink>
        ))}
      </MobileMenu>
    </>
  );
};

export default Navbar;