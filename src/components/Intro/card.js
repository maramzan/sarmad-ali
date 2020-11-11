import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    padding: theme.spacing(2),

    minHeight: 350,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: theme.spacing(1),
  },
  iconStyle: {
    fontSize: "60px",
  },
  card_title: {
    fontSize: "22px",
  },
  learn_button: {
    paddingTop: theme.spacing(),
  },
}));

const SimpleCard = (props) => {
  const classes = useStyles();
  const IntroIcon = props.cardIcon;
  return (
    <Card className={classes.root}>
      <CardContent>
        <IntroIcon
          className={classes.iconStyle}
          color="secondary"
          fontSize="large"
        />

        <Typography
          className={classes.card_title}
          variant="h5"
          component="h2"
          gutterBottom
        >
          {props.cardTitle}
        </Typography>
        <Typography
          className={classes.pos}
          varient="body1"
          color="textSecondary"
        >
          {props.cardDetail}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" size="small" className={classes.learn_button}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

SimpleCard.prototype = {
  cardIcon: PropTypes.element,
};

export default SimpleCard;
