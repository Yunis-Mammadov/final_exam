import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import LayersIcon from "@mui/icons-material/Layers";
import styles from "../Navbar/index.module.css";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import EmailIcon from "@mui/icons-material/Email";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";

const drawerWidth = 240;
const navItems = [
  { label: "Home", path: "" },
  { label: "Add", path: "addserver" },
  { label: "Domain", path: "" },
  { label: "Hosting", path: "" },
  { label: "Blog", path: "" },
  { label: "Contact", path: "" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            component={Link}
            key={item.label}
            to={`/${item.path}`}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar sx={{backgroundColor:"rgb(52,58,64)"}} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box className={styles.linksParent}>
            <Box>
              {navItems.map((item) => (
                <Button
                  component={Link}
                  key={item.label}
                  to={`/${item.path}`}
                  sx={{ color: "white" }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
              <Box className={styles.navbarButtons}>
                <button className={styles.navbarRegisterButton}>Register</button>
                <button className={styles.navbarLoginButton}>Login</button>
              </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Navbar;
