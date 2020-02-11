import React, { Component }  from 'react';
import './BusinessContainer.css';
import ResultsContainer from "./ResultsContainer.jsx";

/* Import Components */
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";

class BusinessContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newBusiness: {
        name: "",
        values: "",
        give: ""
      },

      valuesOptions: ["Sustainability", "Community", "Health", "Financial Security"],
      giveOptions: ["Food", "Clothing", "People", "Money", "Electronics", "Other"],
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
        newBusiness: {
          ...prevState.newBusiness,
          name: value
        }
      }),
      () => console.log(this.state.newBusiness)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newBusiness: {
          ...prevState.newBusiness,
          [name]: value
        }
      }),
      () => console.log(this.state.newBusiness)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newBusiness;
    console.log(userData);

    fetch("https://ellehacks-2020-dd.appspot.com/business/add", {
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
      newBusiness: {
        name: "",
        values: "",
        give: ""
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
        <h1>Donor</h1>
        <Input
          inputType={"text"}
          title={"Business Name"}
          name={"name"}
          value={this.state.newBusiness.name}
          placeholder={"Enter name"}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the user */}
        <Select
          name={"values"}
          options={this.state.valuesOptions}
          value={this.state.newBusiness.values}
          placeholder={"My values are"}
          handleChange={this.handleInput}
        />{" "}
        {/* Age Selection */}
        <Select
          name={"give"}
          options={this.state.giveOptions}
          value={this.state.newBusiness.give}
          placeholder={"I can give"}
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
          type={"primary"}
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

export default BusinessContainer;
