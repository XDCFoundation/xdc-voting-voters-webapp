# XDC Voting voters Webapp

XDC Voting Voters Webapp is about enduser portal in which whitelisted addresses can create and vote on a proposal and can view the details of a proposal.

## Usage

This webapp is having following features.

- Connect Wallet - Users can install XDCPay extension and can login to the portal by connecting the wallet.
- Create Proposal - In this page whitelisted users can create the proposals by filling all the required fields.
- Recent Proposal - In this section of the page addresses who are whitelisted on the admin portal can see all the proposals which are open, passed or rejected.
- View All Proposals - In this page user can view all the proposals and can filter by searching any proposal, status like open, pass or reject and by date when the proposal is created.
- Proposal Details - In this button click of any proposal which are open, whitelist users can see the all the details of any proposal, Time left for the proposal to be closed for voting, user can also vote for that proposal like support or reject, any supporting document for the proposal and how many users have voted to that proposal.
- List of Voted Voters - Whitelist users can view all the voterlist of all the proposals.
- XDC Community Tools - In this user can see all the community tools products of XDC.
- FAQ - In this user can get all FAQs which they may need for any query.
- Overview - In this user get to know everything about XDC Governance.
- Social Media Links - user can also look for all the social media pages of XDC in footer.
- New Proposal alert - All whitelisted users will get the mail notification when new proposal is posted.

## Steps for local setup

- clone the repository in your local system
- run `npm install` : To install the dependencies
- run `npm start` : It will start your server on your local machine
- Dependencies : Defined under `package.json`
- Deployment instructions : Docker based deployment, Dockerfile is there in parent directory

## About env file

This file is having different types of variables like:

- All the microservice url that is required in webapp
- etc.
