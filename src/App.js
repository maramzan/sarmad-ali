import React from "react";
import Home from "./components/index";
import { CssBaseline } from "@material-ui/core";
import Intro from "./components/Intro/Intro";
import Cources from "./components/Courses/Courses";
import Member from "./components/Members/Member";
import Footer from "./components/Footer/Footer";
import Index from "./components/Forms";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Home />
      <Intro />
      <Cources />
      <Member />
      <Footer />
      {/* <Index /> */}
    </div>
  );
};
export default App;
