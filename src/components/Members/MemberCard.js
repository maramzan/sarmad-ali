import React from "react";
import {
  Card,
  Typography,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "10px",
    // background: "#f7d3f7",
    height: 500,
  },
  upper: {
    height: 150,
    padding: 30,
    background: "linear-gradient(to bottom, #7ede93 0%, #6DCA81 100%)",
    textAlign: "center",
    color: "#fff",
  },
  memberImage: {
    position: "Absolute",
    top: -60,
    left: 10,
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    border: "5px solid #fff",
    display: "block",
  },
  subtitle: {
    color: "rgba(255, 255, 255, 0.7)",
  },
  about: {
    marginTop: 50,
  },
  cardContent: {
    padding: theme.spacing(3),
  },
}));
const MemberCard = (props) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <div className={classes.upper}>
          <Typography variant="h6">{props.name}</Typography>
          <Typography className={classes.subtitle} variant="subtitle1">
            {props.title}
          </Typography>
        </div>
        <CardActionArea>
          <CardMedia
            className={classes.memberImage}
            component="img"
            image={props.img}
          />
        </CardActionArea>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.about} variant="h6">
            About
          </Typography>
          <Typography align="justify" variant="body1">
            {props.description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
export default MemberCard;
