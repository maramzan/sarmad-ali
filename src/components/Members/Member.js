import React from "react";
import MemberCard from "./MemberCard";
import { membersData } from "../../constants/membersData";
import { Grid, Container, Typography } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    // margin: "32px auto 0",
    textAlign: "center",
  },
  teamIntro: {
    lineHeight: "29px",
    margin: "32px auto 0",
    textAlign: "center",
    maxWidth: 700,
  },
}));

const allMembers = membersData.map((member, key) => {
  return (
    // <Grid item xs={12} sm={6} md={3}>
    <MemberCard
      key={key}
      img={member.img}
      title={member.title}
      name={member.name}
      description={member.description}
    />
    // </Grid>
  );
});

const Member = () => {
  let settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: "true",
    responsive: [
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 960,
        settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true },
      },
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true },
      },
    ],
  };
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h4" gutterBottom className={classes.title}>
        OUR TEAM MEMBERS
      </Typography>
      <Typography className={classes.teamIntro}>
        We are a team of skilled professionals having core expertise in Mobile
        and Web app development. We also do have Artificial Intelligence and
        WordPress expertise.
      </Typography>
      <Slider {...settings}>{allMembers}</Slider>
    </Container>
  );
};
export default Member;
