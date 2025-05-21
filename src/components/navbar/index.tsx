import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  NavbarContainer,
  NavbarContent,
  LogoLink,
  Logo,
  DesktopMenu,
  MenuLink,
  MobileMenuLink,
} from "./styles";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Link2", path: "/Link2" },
  { label: "Link3", path: "/Link3" },
  { label: "Link4", path: "/Link4" },
  { label: "Link5", path: "/Link5" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path: string) => {
    setMobileOpen(false);
    navigate(path);
  };

  return (
    <NavbarContainer position="sticky">
      <NavbarContent>
        <LogoLink to="/">
          <Logo>Logotipo</Logo>
        </LogoLink>

        <DesktopMenu>
          {menuItems.map((item) => (
            <MenuLink key={item.path} to={item.path}>
              {item.label}
            </MenuLink>
          ))}
        </DesktopMenu>

        <IconButton
          sx={{
            display: { xs: "block", md: "none" },
            color: "#333",
          }}
          aria-label="open drawer"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            "& .MuiDrawer-paper": {
              width: 250,
              padding: "20px",
            },
          }}
        >
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ marginBottom: 2, alignSelf: "flex-end" }}
          >
            <CloseIcon />
          </IconButton>

          {menuItems.map((item) => (
            <MobileMenuLink
              key={item.path}
              to={item.path}
              onClick={() => handleNavigation(item.path)}
            >
              {item.label}
            </MobileMenuLink>
          ))}
        </Drawer>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
