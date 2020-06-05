// Import SDK library
var AWS = require('aws-sdk');

// Set AWS region
AWS.config.update({ region: 'us-west-2' });

// use DynamoDB document client class
var documentClient = new AWS.DynamoDB.DocumentClient();

// library to read the files
var fs = require('fs');

// use Sleep npm module for halting the execution
var sleep = require('sleep');

// read the links json file
var personalLinks = fs.readFileSync('links_personal.json');

// parse the JSON
var jsonContent = JSON.parse(personalLinks);

for (entry in jsonContent) {
  console.log('Entry: ', jsonContent[entry]);

  var params = {
    TableName: 'links',
    Item: jsonContent[entry]
  }

  documentClient.put(params, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });

  // halt the execution for a few milliseconds
  sleep.msleep(500);
}

