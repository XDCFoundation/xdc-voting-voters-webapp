import React from "react";
import BaseComponent from "../baseComponent";
import Loader from "../../assets/styles/images/NewLoader.gif";
import {useParams} from "react-router-dom";
import Utils from "../../utility";
import {ProposalService} from "../../services";
import {history} from "../../managers/history";
import ProposalComponent from "./proposalDetailsComponent"
import Web3 from "web3";
import {abi as proposalContractAbi} from "../../common/abis/proposalContractAbi.json";
import {castVotingProposal, getTotalVotingAddress} from "../../services/proposalService";
import {getSignedUrlService} from "../../services/fileUploaderService";
import moment from "moment";
import {abi as masterContractAbi} from "../../common/abis/masterContractAbi.json";

export default class ProposalDetails extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            proposalAddress: "",
            proposalDetails: {},
            isButtonClicked: false,
            open: false,
            isAllowedToVoting: false,
            proposalDocumentsUrl: [],
            copied: "",
            open1: false,
            open2: false,
            yesVotersList: [],
            noVotersList: []
        };
    }

    async componentDidMount() {
        this.getProposalDetails();
        this.isUserAllowedForVoting()
    }

    isUserAllowedForVoting = () => {
        if (window.ethereum) {//the error line
            window.web3 = new Web3(window.ethereum);
            try {
                window.ethereum.enable();

                let web3;
                web3 = new Web3(window.web3.currentProvider);
                console.log(window.web3.currentProvider);
                window.ethereum.enable();
                web3.eth.getAccounts().then(async accounts => {
                    if (!accounts || !accounts.length) {
                        Utils.apiFailureToast("Wallet is not connected")
                        return;
                    }
                    const addresses = await getTotalVotingAddress();
                    let isAllowedToVoting = false
                    addresses.dataList.map(address => {
                        if (address.address.toLowerCase() === accounts[0].toLowerCase()) {
                            if (address.permission.allowVoting === true) {
                                this.setState({isAllowedToVoting: true})
                            }
                        }
                    })
                });

            } catch (err) {
                alert("Something went wrong.");
            }
        } else {
            Utils.apiFailureToast("Please install XDCPay extension");
        }
    }

    fetchProposalDetailsFromDB = async (address) => {
        let [error, proposalDetailFromDB] = await Utils.parseResponse(ProposalService.getProposalDetail(address, {})).catch(err => {
            Utils.apiFailureToast("Unable to fetch proposal details");
            throw err
        });
        return proposalDetailFromDB;
    }

    getProposalDetails = async () => {
        const address = this.props.location.pathname.replace("/proposal-details/", "");
        // let [error, proposalDetailFromDB] = await Utils.parseResponse(ProposalService.getProposalDetail(address, {})).catch(err => {
        //     Utils.apiFailureToast("Unable to fetch proposal details");
        // });
        const proposalDetailFromDB = await this.fetchProposalDetailsFromDB(address).catch(err => {throw err})

        let web3;
        web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        const contract = new web3.eth.Contract(
            masterContractAbi,
            process.env.REACT_APP_MASTER_CONTRACT_ADDRESS//"0xc96b57A8F1A98278007B559Dc8A8B343e3559F6a"
        );
        const accounts = await web3.eth.getAccounts();
        const tx = {from: accounts[0]}
        const createProposalResponse = await contract.methods.get_proposal_details_by_proposal_address(address).call(tx).catch((err) => {
            console.log(err, "====");
        });
        const proposalDetail = {...proposalDetailFromDB};
        if (!createProposalResponse)
            return;

        proposalDetail.proposalTitle = createProposalResponse[0];
        document.title = proposalDetail.proposalTitle + " | XDC Governance";
        proposalDetail.startDate = Number(createProposalResponse[1]);
        proposalDetail.endDate = Number(createProposalResponse[2]);
        proposalDetail.description = createProposalResponse[4];
        proposalDetail.proposalDocuments = JSON.parse(createProposalResponse[5]);
        proposalDetail.pollingContract = proposalDetailFromDB.pollingContract;
        proposalDetail.status = createProposalResponse[6];
        proposalDetail.createdOn = proposalDetailFromDB.createdOn;
        proposalDetail.updatedOn = proposalDetailFromDB.updatedOn;
        if (!proposalDetail.proposalDocuments[0])
            proposalDetail.proposalDocuments = []

        if (proposalDetail.endDate > Date.now()) {
            proposalDetail.status = "Open"
            const isVoted = await this.isAlreadyVoted(address)
            if (isVoted)
                this.setState({isButtonClicked: true})
        } else {
            this.setState({isButtonClicked: true})
        }
        // const proposalDocumentsUrl = await this.getSignedUrls(proposalDetail.proposalDocuments)
        this.setState({
            proposalAddress: address,
            proposalDetails: proposalDetail,
            proposalDocumentsUrl: proposalDetail.proposalDocuments
        })
    }

    getSignedUrls = async (documents) => {
        const responseObj = [];
        for (let index = 0; index < documents.length; index++) {
            const url = await getSignedUrlService(documents[index]).catch(err => console.log(err))
            responseObj.push(url);
        }
        return responseObj
    }

    isAlreadyVoted = async (proposalAddress) => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            try {
                window.ethereum.enable();
                let web3;
                web3 = new Web3(window.web3.currentProvider);
                const accounts = await web3.eth.getAccounts()
                if (!accounts || !accounts.length) {
                    return;
                }
                const contract = new web3.eth.Contract(
                    proposalContractAbi,
                    proposalAddress
                );
                const tx = {from: accounts[0]}
                const yesVotersList = await contract.methods.get_yes_voter_list().call(tx).catch((err) => {
                    console.log(err, "====");
                });
                const noVotersList = await contract.methods.get_no_voter_list().call(tx).catch((err) => {
                    console.log(err, "====");
                });
                if ((!yesVotersList || !yesVotersList.length) && (!noVotersList || !noVotersList.length))
                    return false;

                this.setState({yesVotersList, noVotersList})
                let isVoted = false;
                yesVotersList.map(address => {
                    if (accounts[0] === address)
                        isVoted = true
                })

                noVotersList.map(address => {
                    if (accounts[0] === address)
                        isVoted = true
                })
                return isVoted;

            } catch (err) {
                alert("Something went wrong.");
            }
        } else {
            Utils.apiFailureToast("Please install XDCPay Extension");
        }
    }

    handleClickVoter = () => {
        history.push("/voterslist/" + this.state.proposalAddress);
        window.scrollTo(0, 0);
    };

    backButton = () => {


        history.push("/");
    };

    castProposalVote = async (isSupport) => {
        if (!this.state.isAllowedToVoting) {
            this.setState({open1: true})
            return;
        }
        if (this.state.proposalDetails.startDate <= Date.now()) {
            let web3;
            web3 = new Web3(window.web3.currentProvider);
            console.log(window.web3.currentProvider);
            window.ethereum.enable();
            web3.eth.getAccounts().then(async (accounts) => {
                if (!accounts || !accounts.length) {
                    Utils.apiFailureToast("Please login to XDCPay extension");
                    return;
                }
                const contract = new web3.eth.Contract(proposalContractAbi, this.state.proposalAddress);
                const acc = accounts[0];
                return new Promise(async (resolve, reject) => {
                    const castProposalResponse = await contract.methods.cast_vote_for_proposal(isSupport, Date.now()).send({from: acc}, async (err, transactionHash) => {
                        if (err || !transactionHash)
                            return;
                        const res = await this.getTransactionReceipt(transactionHash);
                        if (res) {
                            const reqData = {
                                pollingContract: this.state.proposalAddress,
                                voterAddress: acc,
                                support: isSupport
                            };
                            this.addProposalToDatabase(reqData)
                            this.setState({isButtonClicked: true})
                            resolve(true)
                            this.setState({open: true})
                        }
                    }).catch((err) => {
                        reject(err)
                    });

                })

            });
        } else if(this.state.proposalDetails.startDate >= Date.now()) {
            this.setState({open2: true})
            // Utils.apiFailureToast("Voting starts from "+moment(this.state.proposalDetails.startDate).format("DD MMMM YYYY"));
        }
    };
    handleClose = () => {
        this.setState({open: false})
    }
    handleClose1 = () => {
        this.setState({open1: false})
    }
    handleClose2 = () => {
        this.setState({open2: false})
    }
    delay = (ms) => new Promise((res) => setTimeout(res, ms));

    getTransactionReceipt = async (hash) => {
        let web3;
        web3 = new Web3(window.web3.currentProvider);
        let count = 0;
        while (true) {
            count++;
            const receipt = await web3.eth.getTransactionReceipt(hash);
            if (receipt !== null || count > 10) {
                return true;
            }
            await this.delay(3000);
        }
    };

    addProposalToDatabase = async (reqData) => {
        const response = await castVotingProposal(reqData).catch(err => console.log(err));
        const address = this.props.location.pathname.replace("/proposal-details/", "");
        const fetchProposalDetailsFromDB = await this.fetchProposalDetailsFromDB(address)
        const newDetails = {...this.state.proposalDetails, ...fetchProposalDetailsFromDB}
        this.setState({proposalDetails: newDetails})
        this.setState({isButtonClicked: true})
    }


    render() {
        return <ProposalComponent
            state={this.state}
            handleClickVoter={this.handleClickVoter}
            backButton={this.backButton}
            castProposalVote={this.castProposalVote}
            handleClose={this.handleClose}
            handleClose1={this.handleClose1}
            handleClose2={this.handleClose2}
        />
    }
}
