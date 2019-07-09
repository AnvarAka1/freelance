import React, { Component } from "react";
import GridPosition from "../../components/Grid/GridPosition/GridPosition";
import Paper from "../../components/Paper/Paper";
import Button from "../../components/UI/Button/Button";
import Heading from "../../components/Heading/Heading";
import Lable from "../../components/UI/Lable/Lable";
import Grid from "../../components/Grid/Grid";
import { NavLink } from "react-router-dom";
import MenuAside from "../../components/MenuAside/MenuAside";
import PortfolioAside from "../../components/PortfolioAside/PortfolioAside";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import axios from "axios";

class FreelancerInfo extends Component {
  state = {
    freelancerInfo: [
      {
        id: 1,
        heading: "About",
        content:
          "I worked at the PCAD convention downtown Toronto for two consecutive years representing CanAlaska. This job entailed communicating with various investors and consumers, giving solid information about CanAlaska, attracting more people to the booth with a personable attitude and bubbly personality, and representing CanAlaska as best to my ability."
      },
      {
        id: 2,
        heading: "Experience",
        content:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 2,
        heading: "Education",
        content:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      }
    ],
    opinions: [
      {
        id: 1,
        heading: "John Doe",
        addHeading: "Unitel Ltd. / Manager | Rated: 5",
        content:
          "I’m writing to recommend Miyah Miles for the position of retail sales associate at Friendly Furniture Company. I’ve worked with John for the past five years at Bath Supplies Plus in Springfield, and I’ve always been impressed with her ability to handle customers and to work well with her colleagues."
      },
      {
        id: 2,
        heading: "Alex Gerald",
        addHeading: "Ziraat Bank / CEO | Rated: 4",
        content:
          "I have been Miyah’s manager for the five years she has worked with us. She greets customers with a smile, and her expertise is such that she is always able to answer their questions. Her sales numbers have increased every year, and we’re sad to lose him as an employee, but we know she’ll be moving to your city very soon."
      }
    ],
    portfolios: [
      {
        id: 1,
        name: "Akfa university | UI/UX designer"
      },
      {
        id: 2,
        name: "Grab | Front-end developer"
      },
      {
        id: 3,
        name: "Worklance | Project manager"
      },
      {
        id: 4,
        name: "Hugger | Project manager"
      }
    ],
    peopleNumber: 1,
    isUserShown: false,
    isGeneralInfoPage: true
  };
  user() {
    console.log("isUserShown = ", this.props.isUserShown);

    if (this.state.isUserShown !== this.props.isUserShown) {
      this.props.onUserChanged();
      this.setState({ shouldChange: true });
    }
  }

  generalInformationHandler = () => {
    this.setState({ isGeneralInfoPage: true });
    /* axios
      .get("general info")
      .then(res => {
        const portfoliosHolder = this.state.portfolios.slice();
        const opinions = this.state.opinios.slice();
        const newFreelancerInfo = res.data.freelancerInfo;
        const stateHolder = {
          ...this.state,
          portfolios: portfoliosHolder,
          opinions: opinions,
          freelancerInfo: newFreelancerInfo
        };
        this.setState({ stateHolder });
      })
      .catch(err => {
        console.log(err);
      });*/
  };
  opinionsHandler = () => {
    this.setState({ isGeneralInfoPage: false });
    /*axios
      .get("opinions")
      .then(res => {
        const portfoliosHolder = this.state.portfolios.slice();
        const freelancerInfoHolder = this.state.freelancerInfo.slice();
        const newOpinions = res.data.opinions;
        const stateHolder = {
          ...this.state,
          portfolios: portfoliosHolder,
          freelancerInfo: freelancerInfoHolder,
          opinions: newOpinions
        };
        this.setState({ stateHolder });
      })
      .catch(err => {
        console.log(err);
      });*/
  };
  render() {
    this.user();
    // console.log("[FreelancerInfo] id = ", this.props.match.params.id);

    const contentInfo = this.state.isGeneralInfoPage
      ? this.state.freelancerInfo.map(info => {
          return (
            <div key={info.id} style={{ marginBottom: "30px" }}>
              <Heading>{info.heading}</Heading>
              <Lable style={{ fontSize: "18px" }}>{info.content}</Lable>
            </div>
          );
        })
      : this.state.opinions.map(opinion => {
          return (
            <div key={opinion.id}>
              <Paper>
                <Heading small addHeading={opinion.addHeading}>
                  {opinion.heading} |
                </Heading>
                <Lable style={{ fontSize: "18px" }}>{opinion.content}</Lable>
              </Paper>
            </div>
          );
        });

    const content = (
      <Grid item xs={12}>
        {contentInfo}
      </Grid>
    );
    const addContent = (
      <Grid item xs={12}>
        <MenuAside
          genClicked={this.generalInformationHandler}
          opClicked={this.opinionsHandler}
          peopleNumber={this.state.peopleNumber}
          active={this.state.isGeneralInfoPage}
        />
        <PortfolioAside portfolios={this.state.portfolios} />
      </Grid>
    );
    return <GridPosition two content={content} addContent={addContent} />;
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
)(FreelancerInfo);
