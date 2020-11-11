import React from "react";
import {
  Grid,
  Typography,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  InputBase,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { LinkedIn, Twitter, Facebook, Directions } from "@material-ui/icons";
// import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    textAlign: "left",
    backgroundColor: "#2E2E2E",

    marginTop: "32px",
    color: "#fff",
  },
  footerSections: {
    // textAlign: "center",
    padding: "25px",
    lineHeight: "1.5em",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
  listItem: {
    color: "#fff",
  },
  emailInput: {
    width: "270px",
    minWidth: "250px",
    paddingLeft: "5px",
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root}>
        <Grid className={classes.footerSections} item xs={12} md={4}>
          <Typography gutterBottom variant="h5">
            CONTACT US
          </Typography>

          {/* <br /> */}
          <Typography variant="body1">EMAIL :sarmad@ssca.tech</Typography>
          <Typography variant="body1">PHONE : (+92 300 0256232)</Typography>
          <Typography variant="body1">
            ADDRESS :House No. 512, St. NO. 5 ,Al-Madina Colony, Jaranwala,
            Punjab, Pakistan
          </Typography>
        </Grid>
        <Grid className={classes.footerSections} item xs={12} md={4}>
          {" "}
          <Typography variant="h5">QUICK LINKS</Typography>
          <List>
            <ListItem>
              <ListItemIcon className={classes.listItem}>
                <LinkedIn />
              </ListItemIcon>
              <ListItemText>LinkedIn</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.listItem}>
                <Twitter />
              </ListItemIcon>
              <ListItemText>Twitter</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.listItem}>
                <Facebook />
              </ListItemIcon>
              <ListItemText>Facebook</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid className={classes.footerSections} item xs={12} md={4}>
          <Typography gutterBottom variant="h5">
            SUBSCRIBE US
          </Typography>
          <Typography gutterBottom gutterBottom variant="body1">
            Get in tuch with us! subscribe your mail to get latest news from
            codeframe activates and the job openings.
          </Typography>
          <Paper className={classes.emailInput}>
            <InputBase placeholder="enter your email.." />
            <IconButton color="secondary">
              <Directions />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default Footer;
