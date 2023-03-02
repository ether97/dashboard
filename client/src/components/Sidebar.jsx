import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
  Pets,
} from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import profileImage from "../assets/me.jpg";
import PetsIcon from "@mui/icons-material/Pets";
import PanoramaIcon from "@mui/icons-material/Panorama";

const Sidebar = ({
  isNonMobile,
  setIsSidebarOpen,
  isSidebarOpen,
  drawerWidth,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const navItems = [
    {
      text: "Home",
      icon: <HomeOutlined />,
      link: "/",
    },
    {
      text: "Random Picture",
      icon: <PanoramaIcon />,
      link: "/breeds/image/random",
    },
    {
      text: "Specific Breed",
      icon: <PetsIcon />,
      link: "/breed",
    },
    {
      text: "Sub-breeds",
      icon: <PetsIcon sx={{ scale: "1" }} />,
      link: "/breed",
    },
  ];
  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderRightWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box
              m="1.25rem 1rem 1.25rem 2.5rem"
              display="flex"
              alignItems="center"
            >
              <Box display="flex" gap="1rem">
                <Typography variant="h4" fontWeight="bold" textAlign="center">
                  DOG PICTURES
                </Typography>
                <PetsIcon />
              </Box>

              {!isNonMobile && (
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <ChevronLeft />
                </IconButton>
              )}
            </Box>
            <List>
              {navItems.map(({ text, icon, link }) => {
                if (!icon) {
                  return (
                    <Typography
                      key={text}
                      sx={{ m: "2.25rem 0 1rem 2.5rem" }}
                      fontWeight="bold"
                      fontSize="1.1rem"
                    >
                      {text}
                    </Typography>
                  );
                } else {
                  return (
                    <Link
                      key={text}
                      to={link}
                      style={{
                        textDecoration: "none",
                        color: theme.palette.secondary[400],
                      }}
                    >
                      <Box
                        width="100%"
                        display="flex"
                        gap="2rem"
                        alignItems="center"
                        m="2rem 0 1rem 2.5rem"
                      >
                        {icon}
                        <Typography key={text}>{text}</Typography>
                      </Box>
                    </Link>
                  );
                }
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
