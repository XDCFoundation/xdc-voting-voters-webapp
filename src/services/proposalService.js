import { httpService } from "../utility/httpService";
import { httpConstants } from "../constants";
export default { getProposalDetail };



// export default{getTotalVotesCasted}
export async function addNewProposal(reqObj) {
  const url =
    process.env.REACT_APP_PROPOSAL_SVC +
    httpConstants.API_END_POINT.ADD_NEW_PROPOSAL;
  return httpService(
    httpConstants.METHOD_TYPE.POST,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    reqObj,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

// async function getProposalDetail() {
//   const url = process.env.REACT_APP_GET_VOTERS_LIST_BY_PROPOSAL;
//   return httpService(
//     httpConstants.METHOD_TYPE.POST,
//     { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
//     { proposalTitle: "Testing" },
//     url
//   )
//     .then((response) => {
//       if (
//         !response.success ||
//         response.responseCode !== 200 ||
//         !response.responseData ||
//         response.responseData.length === 0
//       )
//         return Promise.reject();
//       return Promise.resolve(response.responseData);
//     })
//     .catch(function (err) {
//       return Promise.reject(err);
//     });
// }

async function getProposalDetail(path, data) {
  let url = process.env.REACT_APP_GET_PROPOSAL_DETAIL + path;

  return httpService(
    httpConstants.METHOD_TYPE.GET,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    data,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData 
      )
        return Promise.reject();
        console.log(response.responseData)

      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}


  export  async function getTotalVotesCasted() {
    let url = process.env.REACT_APP_PROPOSAL_SVC+"getProposalDetail/";
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
export async function getTotalPassedProposals() {
  let url = process.env.REACT_APP_GET_TOTAL_PASSED_PROPOSALS;
  // +`?skip=${skip}&limit=${limit}`;
  return httpService(
    httpConstants.METHOD_TYPE.GET,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    {},
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

export async function getTotalVotingAddress() {
  let url = process.env.REACT_APP_GET_TOTAL_VOTING_ADDRESS;
  // +`?skip=${skip}&limit=${limit}`;
  return httpService(
    httpConstants.METHOD_TYPE.GET,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    {},
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

export async function castVotingProposal(reqData) {
  let url = process.env.REACT_APP_CAST_PROPOSAL_VOTE;
  // +`?skip=${skip}&limit=${limit}`;
  return httpService(
    httpConstants.METHOD_TYPE.POST,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    {},
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

export async function getVotePercentageOnProposal() {
  let url = process.env.REACT_APP_GET_VOTE_PERCENTAGE_OF_PROPOSAL;
  // +`?skip=${skip}&limit=${limit}`;
  return httpService(
    httpConstants.METHOD_TYPE.GET,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    {},
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      console.log("respnseforvotepercentageproposal", response.responseData);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}


export async function proposalList(reqObj) {
  const url =process.env.REACT_APP_GET_PROPOSAL_LIST 
  return httpService(
    httpConstants.METHOD_TYPE.POST,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    reqObj,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}
