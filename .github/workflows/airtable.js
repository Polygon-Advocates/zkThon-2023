const Airtable = require('airtable');
const github = require('@actions/github');

const apiKey = 'keyJS9rxH1oNYtmGN';
const apiBase = 'appo8njU31iE50K5b';
const base = new Airtable({apiKey: apiKey }).base(apiBase);

async function run() {
  const prNumber = github.context.payload.pull_request.number;
  const prTitle = github.context.payload.pull_request.title;
  const prUrl = github.context.payload.pull_request.html_urlL;

  await base('Pull Requests').create({
    'Number': prNumber,
    'Title': prTitle,
    'URL': prUrl
  });

  console.log('Successfully posted PR to Airtable');
}

run().catch(err => {
  console.error('Failed to post PR to Airtable', err);
  process.exit(1);
});
