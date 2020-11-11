import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CourseCard from "./courseCard";
import { courseData } from "../../constants/CourseData";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F7F7F7",
    marginBottom: "100px",
  },
  root1: {
    maxWidth: "1200px",
  },
  title: {
    fontSize: "42px",
    // marginLeft: theme.spacing(3),
    paddingTop: "100px",
  },
}));

const courseList = courseData.map((course, key) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={key}>
      <CourseCard
        key={key}
        courseDetail={course.detail}
        courseTitle={course.title}
        courseImage={course.img}
        courseTutor={course.tutor}
        courseFee={course.fee}
      />
    </Grid>
  );
});

const Courses = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Container className={classes.root1}>
        <Typography className={classes.title} gutterBottom>
          Featured Courses
        </Typography>
        <Grid container spacing={3}>
          {courseList}
        </Grid>
      </Container>
    </div>
  );
};
export default Courses;
