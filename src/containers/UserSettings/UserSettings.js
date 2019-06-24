import React, { Component } from "react";
import Heading from "../../components/Heading/Heading";
import InputLabel from "../../components/UI/InputLabel/InputLable";
import classes from "./UserSettings.module.css";

import Grid from "@material-ui/core/Grid";
class UserSettings extends Component {
  state = {
    form: [
      {
        label: "first name",
        input: "input",
        elementConfig: {
          placeholder: "John",
          type: "text"
        },
        value: "",
        validation: {
          required: true,
          minLetters: 2,
          maxLetters: 20
        },
        valid: false
      },
      {
        label: "Surname",
        input: "input",
        elementConfig: {
          placeholder: "Doe",
          type: "text"
        },
        value: "",
        validation: {
          required: true,
          minLetters: 2,
          maxLetters: 20
        },
        valid: false
      },
      {
        label: "Description",
        input: "textarea",
        elementConfig: {
          placeholder:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          type: "text"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false
      }
    ]
  };
  inputChangedHandler = (event, id) => {
    const formValue = {
      ...this.state
    };
    console.log(formValue);
  };
  render() {
    const formElements = this.state.form.map(formElement => {
      return (
        <InputLabel
          key={formElement.label}
          label={formElement.label}
          elementConfig={formElement.elementConfig}
          disabled={false}
          inputChangedHandler={this.inputChangedHandler}
          value={formElement.value}
        />
      );
    });
    console.log(formElements);
    return (
      <Grid container className={classes.UserSettings}>
        <Grid item xs={6}>
          <Heading>General information</Heading>
          {formElements}
        </Grid>
        <Grid item xs={3}>
          <Heading>Security</Heading>
        </Grid>
      </Grid>
    );
  }
}

export default UserSettings;
