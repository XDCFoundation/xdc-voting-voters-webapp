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
