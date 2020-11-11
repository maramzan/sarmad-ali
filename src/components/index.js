import React from "react";

import bgImage from "./img/hero-bg.jpg";
import Header from "./Header/Header";
import Navbar from "./Header/Navbar";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  wrapNav: {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapNav}>
      <Navbar />
      <Header />
    </div>
  );
};
export default Home;
