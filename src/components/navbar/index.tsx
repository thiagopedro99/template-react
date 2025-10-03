// src/components/navbar/index.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Flex } from "@components/common";
import ThemeToggle from "@components/common/ThemeToggle";
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
} from "./styles";
import { Menu, X } from "lucide-react";

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
  { label: "Components", path: "/components" },
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

            <Flex $align="center" $gap="1rem">
              <DesktopMenu>
                {menuItems.map((item) => (
                  <MenuLink key={item.path} to={item.path}>
                    {item.label}
                  </MenuLink>
                ))}
              </DesktopMenu>

              <ThemeToggle />

              <MobileMenuButton onClick={handleToggle} aria-label="Menu">
                <Menu size={24} />
              </MobileMenuButton>

            </Flex>
          </Flex>
        </Container>
      </Nav>

      <Overlay $isOpen={mobileOpen} onClick={handleToggle} />

      <MobileMenu $isOpen={mobileOpen}>
        <Flex $justify="between" $align="center" style={{ marginBottom: '1rem' }}>
          <ThemeToggle />
          <CloseButton onClick={handleToggle} aria-label="Fechar menu">
            <X size={24} />
          </CloseButton>
        </Flex>

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