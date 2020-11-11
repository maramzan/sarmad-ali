import React from "react";
import { Grid, Container } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
import SimpleCard from "./card";
import { cardData } from "../../constants/data";

// const useStyles = makeStyles((theme) => ({}));

const Intro = () => {
  // const classes = useStyles();
  const cardList = cardData.map((item, key) => {
    return (
      <Grid item xs={12} sm={6} md={3} key={key}>
        <SimpleCard
          key={key}
          cardTitle={item.title}
          cardDetail={item.detail}
          cardIcon={item.icon}
        />
      </Grid>
    );
  });

  return (
    <Container>
      <Grid container>{cardList}</Grid>
    </Container>
  );
};
export default Intro;
