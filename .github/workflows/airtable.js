const Airtable = require("airtable");
const github = require("@actions/github");

const apiKey = "keyJS9rxH1oNYtmGN";
const baseId = "appo8njU31iE50K5b";
const base = new Airtable({ apiKey: apiKey }).base(baseId);

const prNumber = github.context.payload.pull_request.number;
const prTitle = github.context.payload.pull_request.title;
const prUrl = github.context.payload.pull_request.html_url;

async function postPRToAirtable(prNumber, prTitle, prUrl) {
  try {
    await base("Pull Requests").create({
      Number: prNumber,
      Title: prTitle,
      URL: prUrl,
    });
    console.log("Successfully posted PR to Airtable");
  } catch (error) {
    console.error("Error posting PR to Airtable:", error);
  }
}

postPRToAirtable(prNumber, prTitle, prUrl);
exports.postPRToAirtable = postPRToAirtable;
