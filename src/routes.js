import React from "react";
import { Router, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { connect } from "react-redux";
import { Login, SignUp } from "./modules";
import Header from "./modules/header/headerComponent";
import { history } from "./managers/history";
import BaseComponent from "./modules/baseComponent";
import AllProposal from "./modules/Dashboard/viewProposal";
import Community from "./modules/CommunityTools";
import Governance from "./modules/Xvd-Governance";

import Createproposal from "./modules/Createnewproposal";
import Voter from "./modules/Voterlist";
class Routes extends BaseComponent {
  componentDidMount() {}

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={history}>
          <Switch>
            <Route exact path={"/"} component={Header} />
            <Route exact path={"/view-all-proposals"} component={AllProposal} />
            <Route exact path={"/sign-up"} component={SignUp} />
            <Route exact path={"/create"} component={Createproposal} />
            <Route exact path={"/voterslist"} component={Voter} />
            <Route exact path={"/community"} component={Community} />
            <Route exact path={"/governance"} component={Governance} />

            <Redirect exact from="*" to="/" />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(Routes);
