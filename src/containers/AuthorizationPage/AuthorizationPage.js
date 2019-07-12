import React, { Component } from "react";
import InputLable from "../../components/UI/InputLabel/InputLable";
import classes from "./AuthorizationPage.module.css";
import Button from "../../components/UI/Button/Button";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
class AuthorizationPage extends Component {
  state = {
    form: {
      signup: {
        name: {
          lable: "first name",
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
          grid: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 6
          },
          valid: false
        },
        surname: {
          lable: "Surname",
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
          grid: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 6
          },
          valid: false
        },
        description: {
          lable: "Description",
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
          grid: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 12
          },
          valid: false
        },
        company: {
          lable: "Company",
          input: "input",
          elementConfig: {
            placeholder: "Unitel Ltd.",
            type: "text"
          },
          value: "",
          validation: {
            required: true,
            minLetters: 2,
            maxLetters: 20
          },
          grid: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 6
          },
          valid: false
        },
        position: {
          lable: "Position",
          input: "input",
          elementConfig: {
            placeholder: "Manager",
            type: "text"
          },
          value: "",
          validation: {
            required: true,
            minLetters: 2,
            maxLetters: 20
          },
          grid: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 6
          },
          valid: false
        },
        number: {
          lable: "Phone number",
          input: "input",
          elementConfig: {
            placeholder: "Phone number",
            type: "text"
          },
          value: "",
          validation: {
            required: true,
            minLetters: 2,
            maxLetters: 20
          },
          grid: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 6
          },
          valid: false
        },
        mail: {
          lable: "E-mail",
          input: "input",
          elementConfig: {
            placeholder: "johndoe@mail.com",
            type: "email"
          },
          value: "",
          validation: {
            required: true,
            minLetters: 2,
            maxLetters: 20
          },
          grid: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 6
          },
          valid: false
        },
        password: {
          lable: "Password",
          input: "input",
          elementConfig: {
            placeholder: "",
            type: "password"
          },
          value: "",
          validation: {
            required: true
          },
          grid: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 12
          },
          valid: false
        },
        confirmPass: {
          lable: "Confirm password",
          input: "input",
          elementConfig: {
            placeholder: "",
            type: "password"
          },
          value: "",
          validation: {
            required: true
          },
          grid: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 12
          },
          valid: false
        },
        formIsValid: false,
        securityFormIsValid: false
      },
      signin: {
        mail: {
          lable: "E-mail",
          input: "input",
          elementConfig: {
            placeholder: "johndoe@mail.com",
            type: "email"
          },
          value: "",
          validation: {
            required: true,
            minLetters: 2,
            maxLetters: 20
          },
          grid: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 6
          },
          valid: false
        },
        password: {
          lable: "Password",
          input: "input",
          elementConfig: {
            placeholder: "",
            type: "password"
          },
          value: "",
          validation: {
            required: true
          },
          grid: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 12
          },
          valid: false
        },
        formIsValid: false,
        securityFormIsValid: false
      }
    },
    isUserShown: true,
    shouldChange: false,
    isSignup: true
  };

  authToggle = () => {
    this.setState(prevState => {
      return {
        isSignup: !prevState.isSignup
      };
    });
  };
  formSubmitHandler = event => {
    event.preventDefault();
    if (this.state.isSignup) {
      //make signup request via axios
      this.props.onSuccessfulAuth();
      this.props.history.replace("/");
    } else {
      //make signin request via axios
    }
  };
  render() {
    const signupArray = [];
    const signinArray = [];
    for (let key in this.state.form.signup) {
      signupArray.push({ id: key, config: this.state.form.signup[key] });
    }
    for (let key in this.state.form.signin) {
      signinArray.push({ id: key, config: this.state.form.signin[key] });
    }
    const inputs = this.state.isSignup
      ? signupArray.map(signup => {
          return (
            <InputLable
              lable={signup.config.lable}
              elementConfig={signup.config.elementConfig}
              input={signup.config.input}
            />
          );
        })
      : signinArray.map(signin => {
          return (
            <InputLable
              lable={signin.config.lable}
              elementConfig={signin.config.elementConfig}
              input={signin.config.input}
            />
          );
        });
    return (
      <div>
        <div className={classes.Topbar}>
          <Button clicked={this.authToggle}>
            {this.state.isSignup ? "Authorize" : "Sign Up"}
          </Button>
        </div>
        <form onSubmit={this.formSubmitHandler}>
          {inputs}
          <Button>Submit</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    // authSuccess() should be replaced by auth()
    onSuccessfulAuth: () => dispatch(actions.authSuccess())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorizationPage);
