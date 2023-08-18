import React from "react";
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
  Menu as MenuIcon,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
  Margin,
  Logout
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import profileImage from "assets/profile.jpeg";
import logo from "assets/logos-white.png";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },

  {
    text: "Transactions",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "What's New",
    icon: <Groups2Outlined />,
  },
  {
    text: "Franchise",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "TSM",
    icon: <PublicOutlined />,
  },

  {
    text: "Certificate",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Settings",
    icon: <TodayOutlined />,
  }
  

  
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            fontSize:"20px",
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: "#121212",
              boxSixing: "border-box",
              borderRadius: "0px 30px 160px 0px",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box >
              <FlexBetween color={theme.palette.secondary.main}>
              <Box display="flex" alignItems="center" gap="0.5rem">
                  <img src={logo} alt="Logo" style={{ width: '190px', height: '160px' }}>
                  </img>
              </Box>
                {!isNonMobile && (
                  <IconButton sx = {{marginRight:"11rem"}} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <MenuIcon  sx = {{color:"#FFF", marginRight:"4rem",fontSize:"20px"}}/>
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem", fontSize:"20px" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      fontSize="20px"
                      sx={{
                        fontSize:"20px",
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon fontSize="20px"
                        sx={{
                          fontSize:"20px",
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} fontSize="20px"/>
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}

              
            </List>
            
          </Box>
          <Divider />
          <Box display="flex" alignItems="center" gap="0.5rem"> 
          <Logout  sx={{ m: "2.25rem 0 1rem 3rem" }}/>
          <Typography sx={{ m: "2.25rem 0 1rem 1rem" } }fontSize="20px">Log Out</Typography>
          </Box>
          <Box>
            
          </Box>
          
        </Drawer>
        
      )}
    </Box>
  );
};

export default Sidebar;
