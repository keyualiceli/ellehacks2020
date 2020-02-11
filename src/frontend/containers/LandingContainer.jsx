import React, { Component } from 'react';
import BusinessContainer from "./BusinessContainer.jsx";
import CharityContainer from "./CharityContainer.jsx";
import Button from "../components/Button";

class LandingContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: 0
    };
  }

  render() {
    if (this.state.response === 1) {
      return (
        <BusinessContainer />
      )
    }
    if (this.state.response === 2) {
      return (
        <CharityContainer />
      )
    }
    return (
      <form className="container-fluid">
        <h1>communilnk</h1>
        <Button
        action={() => {
          this.setState({response: 1});
        }}
          type={"primary"}
          title={"Donor"}
          style={buttonStyle}
        />{" "}
        <Button
          action={() => {
            this.setState({response: 2});
          }}
          type={"primary"}
          title={"Reciever"}
          style={buttonStyle}
        />{" "}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default LandingContainer;
