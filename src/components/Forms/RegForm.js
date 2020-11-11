import React, { Component } from "react";
import FromUserDetail from "./formUserDetail";
import FormPersonalDetail from "./FormPersonalDetails";
export class RegForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };
  // Proceed to Next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //Go Back to perv step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FromUserDetail
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetail
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return <h1>confirm</h1>;

      case 4:
        return <h1>success</h1>;
    }
  }
}

export default RegForm;
