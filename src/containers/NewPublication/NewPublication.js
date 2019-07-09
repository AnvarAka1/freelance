import React, { Component } from "react";
import Grid from "../../components/Grid/Grid";
import Heading from "../../components/Heading/Heading";
import InputLabel from "../../components/UI/InputLabel/InputLable";
import Button from "../../components/UI/Button/Button";
import GridPosition from "../../components/Grid/GridPosition/GridPosition";
import classes from "./NewPublication.module.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
// import axios from "axios";
class NewPublication extends Component {
  state = {
    form: {
      title: {
        lable: "Title",
        input: "input",
        elementConfig: {
          placeholder: "Ищем iOS разработчика на high-load проект",
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
          lg: 12
        },
        valid: false
      },

      description: {
        lable: "Description",
        input: "textarea",
        elementConfig: {
          placeholder:
            "В компанию INTEGRA-SOLUTIONS в Ташкенте требуется\n mid-senior iOS разработчики для работы над продуктами для рынка США\n\nОбязанности:\n- Разработка приложений для iOS;\n- Разработка стратегий по улучшению процессов разработки и рекомендации руководству;\n-Фиксация и исправление ошибок в разрабатываемом приложении.\n\nТребования:\n- Опыт работы в разработке на платформе iOS от 2х лет;\n- Опыт работы с REST и SOAP сервисами, сетевыми протоколами (HTTP, JSON и др.).\n- Знание Objective-C или Swift\n- Умение разбираться в чужом коде;\n- Опыт работы с Agile-Scrum приветствуется;\n- Опыт работы в JIRA приветствуется;\n- Знание русского языка обязательно. Знание технического английского языка приветствуется.\n\nЗаработная плата: от 500$ и выше в зависимости от знаний и опыта.\nКонтактные телефоны:\n97 710 93 85 или в личку ТГ.",
          type: "text"
          //   style: { height: "-webkit-fill-available", maxHeight: "340px" }
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
      type: {
        lable: "Type",
        input: "select",

        elementConfig: {
          options: ["Job offer", "Not job offer"]
        },
        value: "Job offer",
        validation: {
          required: true
        },
        grid: {
          xs: 12,
          sm: 12,
          md: 12,
          lg: 6
        },
        valid: false
      },
      for: {
        lable: "For",
        input: "select",

        elementConfig: {
          options: ["Freelancer", "Team"]
        },
        value: "Freelancer",
        validation: {
          required: true
        },
        grid: {
          xs: 12,
          sm: 12,
          md: 12,
          lg: 6
        },
        valid: false
      },
      budget: {
        lable: "Budget",
        input: "input",
        elementConfig: {
          placeholder: "$500",
          type: "text"
        },
        value: "$",
        validation: {
          required: true,
          minLetters: 2,
          maxLetters: 20
        },
        grid: {
          xs: 12,
          sm: 12,
          md: 12,
          lg: 4
        },
        valid: false
      },
      lookingFor: {
        lable: "Looking for",
        input: "select",

        elementConfig: {
          options: ["Mobile development", "Not Mobile development"]
        },
        value: "Mobile development",
        validation: {
          required: true
        },
        grid: {
          xs: 12,
          sm: 12,
          md: 12,
          lg: 4
        },
        valid: false
      },
      Level: {
        lable: "level",
        input: "select",

        elementConfig: {
          options: ["Mid-Senior", "Junior"]
        },
        value: "Mid-Senior",
        validation: {
          required: true
        },
        grid: {
          xs: 12,
          sm: 12,
          md: 12,
          lg: 4
        },
        valid: false
      },
      skills: {
        lable: "Skills",
        input: "input",
        elementConfig: {
          placeholder:
            "Objective-C, Swift, Agile-Scrum, Jira, REST, SOAP, HTTP, JSON",
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
          lg: 8
        },
        valid: false
      },
      attachFile: {
        lable: "Attach file",
        input: "file",
        elementConfig: {
          placeholder: "Assets.zip",
          type: "file"
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
          lg: 4
        },
        valid: false
      },
      deadline: {
        lable: "Deadline",
        grid: {
          xs: 12,
          sm: 12,
          md: 12,
          lg: 12
        }
      },
      startsFrom: {
        lable: "Starts from",
        input: "date",
        elementConfig: {
          placeholder: "19.06.2019",
          type: "date"
        },
        value: "",
        validation: {
          required: true
        },
        grid: {
          xs: 12,
          sm: 12,
          md: 12,
          lg: 4
        },
        valid: false
      },
      to: {
        lable: "To",
        input: "date",
        elementConfig: {
          placeholder: "18.08.2019",
          type: "date"
        },
        value: "",
        validation: {
          required: true
        },
        grid: {
          xs: 12,
          sm: 12,
          md: 12,
          lg: 4
        },
        valid: false
      }
    },
    formIsValid: false,
    isUserShown: true,
    shouldChange: false
  };
  // componentDidMount() {
  //   axios
  //     .get("np.json")
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
    console.log("isUserShown = ", this.props.isUserShown);

    if (this.state.isUserShown !== this.props.isUserShown) {
      this.props.onUserChanged();
      this.setState({ shouldChange: true });
    }
  }
  jsonCreator() {
    const jsonFile = JSON.stringify(this.state);
    console.log("[New Publication]", jsonFile);
  }
  inputChangedHandler = (event, id) => {
    const updatedForm = {
      ...this.state.form
    };
    const updatedFormElement = {
      ...updatedForm[id],
      value: event.target.value
    };
    updatedForm[id] = updatedFormElement;
    this.setState({ form: updatedForm });
  };
  submitInfoHandler = event => {
    event.preventDefault();
  };
  render() {
    this.user();
    // this.jsonCreator();
    const formElementsArray = [];
    for (let key in this.state.form) {
      formElementsArray.push({ id: key, config: this.state.form[key] });
    }
    const formElements = formElementsArray.map(formElement => {
      return (
        <Grid
          item
          key={formElement.id}
          {...formElement.config.grid}
          style={{ padding: "0 15px" }}
        >
          <InputLabel
            lable={formElement.config.lable}
            elementConfig={formElement.config.elementConfig}
            input={formElement.config.input}
            disabled={false}
            inputChangedHandler={event =>
              this.inputChangedHandler(event, formElement.id)
            }
            value={formElement.config.value}
          />
        </Grid>
      );
    });

    const content = (
      <React.Fragment>
        <Grid item xs={12}>
          <Heading>New publication</Heading>
        </Grid>
        <form
          style={{ width: "100%" }}
          onSubmit={event => this.submitInfoHandler(event)}
        >
          <Grid container>
            {formElements}
            <Grid item lg={4}>
              <div className={classes.FormButton}>
                <Button type="disabled" addClass="Form">
                  Upload
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </React.Fragment>
    );

    return <GridPosition one center={{ xs: 7 }} content={content} />;
  }
}

const mapStateToProps = state => {
  return {
    isUserShown: state.user.isUserShown
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
)(NewPublication);
