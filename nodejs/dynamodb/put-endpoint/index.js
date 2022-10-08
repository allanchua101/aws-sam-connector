const AWS = require("aws-sdk");

exports.handler = async (event, context) => {
  const docClient = new AWS.DynamoDB.DocumentClient();
  await docClient
    .put({
      TableName: process.env.USERS_TABLE_NAME,
      Item: {
        id: context.awsRequestId,
        event: JSON.stringify(event),
      },
    })
    .promise();
};
