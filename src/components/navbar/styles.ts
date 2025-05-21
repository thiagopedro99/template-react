import { styled } from "@mui/material/styles";
import { AppBar } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const COLORS = {
  background: "#ffff",
  shadow: "rgba(0, 0, 0, 0.1)",
  text: "#333",
  primary: "#FFA500",
  border: "#eee",
  activeBackground: "rgba(255, 165, 0, 0.1)",
};

const SIZES = {
  maxWidth: "1200px",
  navHeight: "64px",
  padding: "20px",
  gap: "20px",
  fontSize: {
    logo: "1.5rem",
  },
};

const TRANSITIONS = {
  default: "color 0.2s",
};

export const NavbarContainer = styled(AppBar)({
  backgroundColor: COLORS.background,
  boxShadow: `0 2px 4px ${COLORS.shadow}`,
});

export const NavbarContent = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `0 ${SIZES.padding}`,
  height: SIZES.navHeight,
  maxWidth: SIZES.maxWidth,
  margin: "0 auto",
  width: "100%",
});

export const LogoLink = styled(Link)({
  textDecoration: "none",
});

export const Logo = styled("div")({
  fontSize: SIZES.fontSize.logo,
  fontWeight: "bold",
  color: COLORS.text,
});

export const DesktopMenu = styled("nav")(({ theme }) => ({
  display: "flex",
  gap: SIZES.gap,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const MenuLink = styled(NavLink)({
  color: COLORS.text,
  textDecoration: "none",
  fontWeight: 500,
  transition: TRANSITIONS.default,
  position: "relative",

  "&:hover": {
    color: COLORS.primary,
  },

  "&.active": {
    color: COLORS.primary,
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "-5px",
      left: 0,
      width: "100%",
      height: "2px",
      backgroundColor: COLORS.primary,
    },
  },
});

export const MobileMenuLink = styled(NavLink)({
  display: "block",
  padding: `${SIZES.padding} 0`,
  color: COLORS.text,
  textDecoration: "none",
  fontWeight: 500,
  borderBottom: `1px solid ${COLORS.border}`,
  transition: TRANSITIONS.default,

  "&:hover": {
    color: COLORS.primary,
  },

  "&.active": {
    color: COLORS.primary,
  },
});
