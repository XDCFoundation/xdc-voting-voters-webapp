import {httpService} from "../utility/httpService";
import {httpConstants} from "../constants";

// export default{getTotalVotesCasted}
export default { getVotersPercentage };

export async function addNewProposal(reqObj) {
    const url = process.env.REACT_APP_PROPOSAL_SVC + httpConstants.API_END_POINT.ADD_NEW_PROPOSAL;
    return httpService(
        httpConstants.METHOD_TYPE.POST, {"Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON}, reqObj, url)
        .then((response) => {
            if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                return Promise.reject();
            return Promise.resolve(response.responseData);
        })
        .catch(function (err) {
            return Promise.reject(err);
        });
}
  export  async function getTotalVotesCasted() {
    let url = process.env.REACT_APP_GET_TOTAL_CASTED_VOTES;
    // +`?skip=${skip}&limit=${limit}`;
    return httpService(httpConstants.METHOD_TYPE.GET, { 'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON }, {}, url)
        .then(
            response => {
                if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                    return Promise.reject();
                return Promise.resolve(response.responseData);

            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
}
export  async function getTotalPassedProposals() {
    let url = process.env.REACT_APP_GET_TOTAL_PASSED_PROPOSALS;
    // +`?skip=${skip}&limit=${limit}`;
    return httpService(httpConstants.METHOD_TYPE.GET, { 'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON }, {}, url)
        .then(
            response => {
                if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                    return Promise.reject();
                return Promise.resolve(response.responseData);

            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
}

export  async function getTotalVotingAddress() {
    let url = process.env.REACT_APP_GET_TOTAL_VOTING_ADDRESS;
    // +`?skip=${skip}&limit=${limit}`;
    return httpService(httpConstants.METHOD_TYPE.GET, { 'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON }, {}, url)
        .then(
            response => {
                if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                    return Promise.reject();
                return Promise.resolve(response.responseData);

            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
}


export  async function getVotersPercentage() {
    let url = process.env.REACT_APP_GET_VOTING_PERCENTAGE;
    return httpService(httpConstants.METHOD_TYPE.GET, { 'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON }, {}, url)
        .then(
            response => {
                if (!response.success || response.responseCode !== 200 || !response.responseData )
                    return Promise.reject();
                return Promise.resolve(response.responseData);
               

            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
}