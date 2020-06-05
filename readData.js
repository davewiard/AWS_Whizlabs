// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Set the region
AWS.config.update({ region: 'us-west-2' });

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB();

var params = {
  // set attribute to get
  AttributesToGet: [
    'name', 'uri', 'category'
  ],
  TableName: 'links',
  Key: {
    'name': {
      'S': 'Whizlabs'
    }
  }
};

// Get item from DDB
ddb.getItem(params, function(err, data) {
  if (err) {
    console.log(err);   // an error occurred
  } else {
    console.log(data);  // successful response
  }
});

