const AWS = require("aws-sdk");
const options = {
  apiVersion: "2012-08-10",
  region: process.env.APP_REGION || "ap-southeast-1",
};
const client = new AWS.DynamoDB.DocumentClient(options);

const getAllUsers = async () => {
  const params = {
    TableName: process.env.USERS_TABLE_NAME,
  };
  const output = [];

  do {
    let data = await client.scan(params).promise();

    output = output.concat(...data.Items);
    params.ExclusiveStartKey = data.LastEvaluatedKey;
  } while (typeof params.ExclusiveStartKey != "undefined");

  return output;
};

exports.handler = async (event, context) => {
  const docClient = new AWS.DynamoDB.DocumentClient();
  const userList = await getAllUsers();

  return {
    statusCode: 200,
    body: JSON.stringify(userList),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://apis.foo.com",
      "Access-Control-Allow-Headers": "Content-Type,x-api-key",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE",
    },
  };
};
