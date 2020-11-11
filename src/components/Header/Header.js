import React from "react";
import {
  Typography,
  Container,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
// import { Height } from "@material-ui/icons";
// import Typed from "react-typed";
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  typedContaier: {
    // position: "absolute",
    // left: "50%",
    // transform: "translate(-50%,-50%)",
    // textAlign: "center",
    // alignItems: "center",
    // backgroundColor: "gray",
    padding: theme.spacing(5),
    width: "100vw",
    justifyContent: "left",
    zIndex: 1,
  },
  smallCaption: {
    color: "#6DCA81",
    fontWeight: "650",
    marginTop: theme.spacing(5),
    textAlign: "center",
  },
  title: {
    color: "white",
    fontWeight: "800",
    // justify: "center",
    textAlign: "center",
  },
  introPara: {
    color: "white",
  },
  applyButton: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    border: "2px solid",
    fontWeight: "bold",
    padding: theme.spacing(2),

    "&:hover": {
      backgroundColor: "#61AE74",
      color: "white",
      boxShadow: "none",
      border: "none",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.typedContaier}>
        <ThemeProvider theme={theme}>
          <Typography
            gutterBottom
            variant="h5"
            className={classes.smallCaption}
          >
            GET STARTED ONLINE &#38; PHYSICAL CLASSES
          </Typography>
          <Typography gutterBottom className={classes.title} variant="h2">
            SARMAD SOFTWARE HOUSE <br /> &#38; <br /> COMPUTER SCIENCE ACADMEY
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            align="justify"
            className={classes.introPara}
          >
            Our Institute welcomes anyone who is interested in computer sciences
            or anyother fields like Mathematics, English or any other field
            related to computer sciences. We have brilliant teachers or should i
            say experts in there fields to deliever there knowledge to the to
            the people whre are interested and want to learn skills. To make
            things clear we do not offer any certificate or defree yet but we
            offer skills to the people who wants to be skilled because a piece
            of paper does not define you, it's your skills and what you can do
            with them
          </Typography>
        </ThemeProvider>
        <Button
          variant="outlined"
          className={classes.applyButton}
          color="secondary"
        >
          Apply Now
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default Header;
