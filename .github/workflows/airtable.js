const Airtable = require('airtable');
const github = require('@actions/github');

const apiKey = 'keyJS9rxH1oNYtmGN';
const baseId = 'appo8njU31iE50K5b';
const base = new Airtable({apiKey: apiKey}).base(baseId);

async function postPRToAirtable(prNumber, prTitle, prUrl) {
  await base('Pull Requests').create({
    'Number': prNumber,
    'Title': prTitle,
    'URL': prUrl
  });
  console.log('Successfully posted PR to Airtable');
}

exports.postPRToAirtable = postPRToAirtable;
