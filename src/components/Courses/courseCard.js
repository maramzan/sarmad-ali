import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    "&:hover": {
      boxShadow: "0 24px 38px rgba(81,107,117,.21)",
    },
  },
  tutor: {
    fontWeight: 600,
  },
});

const CourseCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.courseImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.courseTitle}
          </Typography>
          <Typography
            className={classes.tutor}
            variant="subtitle1"
            color="secondary"
          >
            {props.courseTutor}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.courseDetail}
          </Typography>

          <Typography color="secondary">{props.courseFee}</Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
};
export default CourseCard;
