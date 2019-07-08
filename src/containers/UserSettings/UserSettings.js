import React, { Component } from "react";
import Heading from "../../components/Heading/Heading";
import InputLabel from "../../components/UI/InputLabel/InputLable";
import classes from "./UserSettings.module.css";
import Button from "../../components/UI/Button/Button";
import Grid from "../../components/Grid/Grid";
import GridPosition from "../../components/Grid/GridPosition/GridPosition";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
// import axios from "axios";
class UserSettings extends Component {
  state = {
    form: {
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
      }
    },
    securityForm: {
      curPass: {
        lable: "Current password",
        input: "input",
        elementConfig: {
          placeholder: "••••••",
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
      newPass: {
        lable: "New password",
        input: "input",
        elementConfig: {
          placeholder: "••••••",
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
      ConfirmPass: {
        lable: "Confirm password",
        input: "input",
        elementConfig: {
          placeholder: "••••••",
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
      }
    },
    formIsValid: false,
    securityFormIsValid: false,
    isUser: true,
    shouldChange: false
  };
  // componentDidMount() {
  //   axios
  //     .get("mp.json")
  //     .then(res => {
  //       console.log(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err.data);
  //     });
  // }
  componentDidMount() {
    if (this.state.shouldChange) {
      // axios.get(user)
      this.setState({ shouldChange: false });
    }
  }
  user() {
    console.log("isUser = ", this.props.isUser);

    if (this.state.isUser !== this.props.isUser) {
      this.props.onUserChanged();
      this.setState({ shouldChange: true });
    }
  }
  jsonCreator() {
    const jsonFile = JSON.stringify(this.state);
    console.log("[UserSettings]", jsonFile);
  }

  inputChangedHandler = (event, id, type) => {
    switch (type) {
      case 0:
        const updatedForm = {
          ...this.state.form
        };
        const updatedFormElement = {
          ...updatedForm[id],
          value: event.target.value
        };
        updatedForm[id] = updatedFormElement;
        this.setState({ form: updatedForm });
        break;
      case 1:
        const updatedSecForm = {
          ...this.state.securityForm
        };
        const updatedSecFormElement = {
          ...updatedSecForm[id],
          value: event.target.value
        };
        updatedSecForm[id] = updatedSecFormElement;
        this.setState({ securityForm: updatedSecForm });
        break;
      default:
        console.log("No such form!");
        break;
    }
  };

  submitInfoHandler = event => {
    event.preventDefault();
    console.log("Info is submitted");
  };
  submitSecurityHandler = event => {
    event.preventDefault();
    console.log("Security is submitted");
  };
  render() {
    this.user();
    const formArray = [];
    const securityArray = [];
    for (let key in this.state.form) {
      formArray.push({ id: key, config: this.state.form[key] });
    }
    const formElements = formArray.map(formElement => {
      return (
        <Grid item {...formElement.config.grid} key={formElement.id}>
          <InputLabel
            lable={formElement.config.lable}
            elementConfig={formElement.config.elementConfig}
            input={formElement.config.input}
            disabled={false}
            inputChangedHandler={event =>
              this.inputChangedHandler(event, formElement.id, 0)
            }
            value={formElement.config.value}
          />
        </Grid>
      );
    });
    for (let key in this.state.securityForm) {
      securityArray.push({ id: key, config: this.state.securityForm[key] });
    }
    const securityElements = securityArray.map(securityElement => {
      return (
        <Grid item {...securityElement.config.grid} key={securityElement.id}>
          <InputLabel
            lable={securityElement.config.lable}
            elementConfig={securityElement.config.elementConfig}
            input={securityElement.config.input}
            disabled={false}
            inputChangedHandler={event =>
              this.inputChangedHandler(event, securityElement.id, 1)
            }
            value={securityElement.config.value}
          />
        </Grid>
      );
    });

    const content = (
      <form
        onSubmit={event => this.submitInfoHandler(event)}
        className={classes.Form}
      >
        <Grid container>
          <Grid item xs={12}>
            <Heading link="something.com">General information</Heading>
          </Grid>
          {formElements}
          <Grid item xs={12}>
            <Button addClass="Form" type="disabled">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    );
    const addContent = (
      <React.Fragment>
        <Heading>Security</Heading>
        <form
          onSubmit={event => this.submitSecurityHandler(event)}
          className={classes.Form}
        >
          <Grid container>
            {securityElements}
            <Grid item xs={12}>
              <Button addClass="Form" type="disabled">
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </React.Fragment>
    );

    return (
      <GridPosition
        two
        center={{ xs: 7 }}
        right={{ xs: 4 }}
        content={content}
        addContent={addContent}
      />
    );
  }
}

// const oldCode = (
//     <Grid container className={classes.UserSettings}>
//         <Grid item xs={6} padding="true">
//           <form
//             onSubmit={event => this.submitInfoHandler(event)}
//             className={classes.Form}
//           >
//             <Grid container>
//               <Grid item xs={12}>
//                 <Heading link="something.com">General information</Heading>
//               </Grid>
//               {formElements}
//               <Grid item xs={12}>
//                 <Button addClass="Form" type="disabled">
//                   Save
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </Grid>
//         <Grid item xs={3}>
//           <Heading>Security</Heading>
//           <form
//             onSubmit={event => this.submitSecurityHandler(event)}
//             className={classes.Form}
//           >
//             <Grid container>
//               {securityElements}
//               <Grid item xs={12}>
//                 <Button addClass="Form" type="disabled">
//                   Save
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </Grid>
//       </Grid>
// );
const mapStateToProps = state => {
  return {
    isUser: state.user.isUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onUserChanged: () => dispatch(actions.userChanged())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSettings);
