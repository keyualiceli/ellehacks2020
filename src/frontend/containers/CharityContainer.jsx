import React, { Component }  from 'react';
import './CharityContainer.css';
import ResultsContainer from "./ResultsContainer.jsx";

/* Import Components */
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";

class CharityContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCharity: {
        name: "",
        mission: "",
        needs: ""
      },

      missionOptions: ["Sustainability", "Community", "Health", "Financial Security"],
      needsOptions: ["Food", "Clothing", "People", "Money", "Other"],
      response: []
    };
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newCharity: {
          ...prevState.newCharity,
          name: value
        }
      }),
      () => console.log(this.state.newCharity)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newCharity: {
          ...prevState.newCharity,
          [name]: value
        }
      }),
      () => console.log(this.state.newCharity)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newCharity;
    console.log(userData);

    fetch("https://ellehacks-2020-dd.appspot.com/charity/add", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        this.setState({response: data});
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newCharity: {
        name: "",
        mission: "",
        needs: ""
      }
    });
  }
  render() {
    if (this.state.response.length > 0) {
      return (
        <ResultsContainer response={this.state.response}/>
      )
    }
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <h1>Charity</h1>
        <Input
          inputType={"text"}
          title={"Charity Name"}
          name={"name"}
          value={this.state.newCharity.name}
          placeholder={"Enter Charity name"}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the user */}
        <Select
          name={"mission"}
          options={this.state.missionOptions}
          value={this.state.newCharity.mission}
          placeholder={"My mission is"}
          handleChange={this.handleInput}
        />{" "}
        {/* Age Selection */}
        <Select
          name={"needs"}
          options={this.state.needsOptions}
          value={this.state.newCharity.needs}
          placeholder={"I can needs"}
          handleChange={this.handleInput}
        />{" "}
        {/* Skill */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default CharityContainer;
