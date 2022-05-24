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
import AllProposal from "./modules/Proposallist";
import Community from "./modules/CommunityTools";
import Governance from "./modules/XvdGovernance";
import Overview from "./modules/XvdOverview";
import FAQs from "./modules/XvdFaq";
import AddressGroupMain from "./modules/AddressGroups";
import AddressGroup from "./modules/AddressGroups/addressGroup";
import AddressGroupTabs from "./modules/AddressGroups/addressGroupTabs";
import Createproposal from "./modules/Createnewproposal";
import Voter from "./modules/Voterlist";
import ProposalDetails from "./modules/ProposalDetails";
import { getTotalVotingAddress } from "./services/proposalService";
import Utils from "./utility";
import Web3 from "web3";
import HomePage from "./modules/Dashboard/homePage";



class Routes extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      wallet: "",
      show: 0,
      isAllowedToCreateProposal: false,
    };
  }
  //  width  = useWindowDimensions();

  componentDidMount() {
    if (window.xdc) {
      window.web3 = new Web3(window.xdc);
      try {
        // window.ethereum.enable();
        let web3;
        web3 = new Web3(window.web3.currentProvider);
        console.log("+++", web3);
        // window.ethereum.enable();
        const accounts = web3.eth.getAccounts().then((accounts) => {
          if (!accounts || !accounts.length) {
            return;
          }
          console.log(accounts[0]);
          this.setState({ wallet: accounts[0] });
          this.fetchData(accounts[0]);
          this.fetchCreatePermission(accounts[0]);
        });
      } catch (err) {
        alert("Something went wrong.");
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      let web3;
      web3 = new Web3(window.web3.currentProvider);
      console.log("+++", web3);
      // window.ethereum.enable();

      const accounts = web3.eth.getAccounts().then((accounts) => {
        if (!accounts || !accounts.length) {
          console.log("please login");
          // Utils.apiFailureToast("Wallet is not connected");
          return;
        }
        console.log(accounts[0]);
        this.setState({ wallet: accounts[0] });
        this.fetchData(accounts[0]);
        this.fetchCreatePermission(accounts[0]);
      });
    } else {
      // Utils.apiFailureToast("Please install XDCPay extension");
    }
  }
  // }, []);

  fetchData = async (param) => {
    const addresses = await getTotalVotingAddress();
    let isAllowedToCreateProposal = false;
    let showOpenProposal = false;
    addresses.dataList.map((address) => {
      if (address.address.toLowerCase() === param.toLowerCase()) {
        this.setState({ show: 1 });
      }
    });
  };

  fetchCreatePermission = async (param) => {
    const addresses = await getTotalVotingAddress();
    let isAllowedToCreateProposal = false;
    let showOpenProposal = false;
    addresses.dataList.map((address) => {
      if (address.address.toLowerCase() === param.toLowerCase()) {
        this.setState({ show: 1 });

        if (address.permission.allowProposalCreation === true)
          this.setState({ isAllowedToCreateProposal: true });
      }
    });
  };



  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={history}>
          <Switch>
          <Route exact path={"/"} component={HomePage} />
          {this.state.isAllowedToCreateProposal == true ? (
           <Route  exact path={"/yourProposals"} component={Header} />
           ) : (
            ""
            
          )}
            <Route exact path={"/view-all-proposals"} component={AllProposal} />
            {this.state.show == 1 ? (
              <Route
                exact
                path={"/proposal-details/:address"}
                component={ProposalDetails}
              />
            ) : (
              ""
            )}

            <Route exact path={"/sign-up"} component={SignUp} />
            {this.state.isAllowedToCreateProposal == true ? (
              <Route exact path={"/create"} component={Createproposal} />
            ) : (
              ""
            )}
            <Route exact path={"/voterslist/:address"} component={Voter} />
            <Route exact path={"/community"} component={Community} />
            <Route exact path={"/governance"} component={Governance} />
            <Route exact path={"/overview"} component={Overview} />
            <Route exact path={"/FAQs"} component={FAQs} />
            <Route exact path={"/AddressGroup"} component={AddressGroupMain}/>
            <Route exact path={"/AddressGroup"} component={AddressGroup}/>
            <Route exact path={"/AddressGroupTabs"} component={AddressGroupTabs}/>

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
