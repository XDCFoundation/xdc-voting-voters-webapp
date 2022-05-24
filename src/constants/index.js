/**
 * Created by Ayush Kulshrestha on 18/09/2019.
 */

export const httpConstants = {
  METHOD_TYPE: {
    POST: "POST",
    PUT: "PUT",
    GET: "GET",
    DELETE: "DELETE",
  },
  CONTENT_TYPE: {
    APPLICATION_JSON: "application/json",
    MULTIPART_FORM_DATA: "multipart/form-data",
    APPLICATION_FORM_URLENCODED: "application/x-www-form-urlencoded",
    IMAGE_PNG: "image/png",
  },
  DEVICE_TYPE: {
    WEB: "web",
  },
  API_END_POINT: {
    ADD_NEW_PROPOSAL: "add-proposal",
  },
};

export const faqsList = [
  {
    id: 0,
    questionText:
      "What is XDC Governance?",
    answerText:
      "XDC Governance is a reliable decentralized blockchain-based web app facilitating on-chain voting to XDC stakeholders for extensive decision-making.",
  },
  {
    id: 1,
    questionText:
      "Do I need to log in to access the dApp?",
    answerText:
      "No, you don’t need to signup or log in to access XDC Governance. However, you’ll need to connect your XDCPay wallet to create proposals and participate in voting.",
  },
  {
    id: 2,
    questionText:
      "How to create a proposal?",
    answerText:
      "Once you connect your wallet, click on the Create Proposal button. Enter the required proposal details and submit your proposal.",
  },
  {
    id: 3,
    questionText:
      "Who can cast votes on proposals?",
    answerText:
      "Only the whitelisted voters can cast their votes on proposals.",
  },
  {
    id: 4,
    questionText:
      "How can I become a voter?",
    answerText:
      "Admin will request you to become a voter and add your XDCPay wallet address as a whitelisted voter identity.",
  },
  {
    id: 5,
    questionText:
      "Can I view the list of voters for a particular proposal?",
    answerText:
      "Yes. Click on the Details button of the particular proposal you want to view the voters’ list. Now, click on “View All Voters” to check out the list of all voters.",
  },
  {
    id: 6,
    questionText:
      "Will I get alerts for every new proposal created on-chain?",
    answerText:
      "Yes. You need to subscribe by sharing your email address and you’ll never miss any updates from XDC Governance.",
  },
];

export const GOVERNANCE_DESCRIPTION="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor a arcu vitae mattis. Etiam at molestie neque. Phasellus mauris ligula, condimentum a sem in, pretium imperdiet augue. Aliquam eu est justo. Mauris vitae scelerisque ante, ac fermentum purus. Integer egestas enim eu nibh maximus, et molestie magna aliquam. Curabitur euismod mattis hendrerit. Nunc efficitur rhoncus purus, a consequat orci mattis in. Suspendisse ut finibus risus."
