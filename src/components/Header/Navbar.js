import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import avatar from "../components/avatar.png";
// import avatar from "../components/img/avatar.png";
import avatar from "../img/avatar.png";

import {
  Typography,
  Drawer,
  IconButton,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Avatar,
  Divider,
  Hidden,
} from "@material-ui/core";
import {
  Home,
  Info,
  Contacts,
  MenuBook,
  AccountCircle,
} from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    opacity: 0.8,
  },
  avatar: {
    display: "block",
    margin: "3.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(3),
    fontWeight: 500,
  },
  menuSliderContainer: {
    background: "#2E2E2E",
    height: "100%",
    width: 250,
    color: "white",
  },
  navItem: {
    display: "inline",
    padding: theme.spacing(5),
    fontWeight: "bold",
    fontSize: "16px",
    "&:hover": {
      color: "#6DCA81",
    },
  },
  navWrapper: {
    marginRight: "3rem",
  },
  listItem: {
    color: "white",
  },
}));
const menuIcons = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <MenuBook />,
    listText: "Courses",
  },
  {
    listIcon: <Info />,
    listText: "About",
  },

  {
    listIcon: <Contacts />,
    listText: "Contacts",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });
  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const slideList = (slider) => (
    <Box component="div" className={classes.menuSliderContainer}>
      <div>
        <Avatar src={avatar} className={classes.avatar} alt="profile avatar" />
      </div>

      <Divider />
      <List>
        {menuIcons.map((lsItem, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              onClick={toggleSlider("right", true)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
          </Hidden>
          <Typography variant="h4" className={classes.title}>
            Sarmad <span style={{ color: "#6DCA81" }}>Ali</span>
          </Typography>
          <Hidden only={["xs", "sm"]}>
            <Box className={classes.navWrapper}>
              <List>
                <ListItem className={classes.navItem}>Home</ListItem>
                <ListItem className={classes.navItem}>Courses</ListItem>
                <ListItem className={classes.navItem}>About</ListItem>
                <ListItem className={classes.navItem}>Contact</ListItem>
              </List>
            </Box>
          </Hidden>
          <Drawer
            anchor="left"
            open={state.right}
            onClose={toggleSlider("right", false)}
          >
            {slideList("right")}
          </Drawer>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle fontSize="large" color="secondary" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
