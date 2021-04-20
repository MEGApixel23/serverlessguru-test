const DynamoDB = require('aws-sdk/clients/dynamodb');
const DocumentClient = new DynamoDB.DocumentClient();

const { DISHES_TABLE } = process.env;

module.exports.main = async () => {
  const { Items } = await DocumentClient.scan({
    TableName: DISHES_TABLE,
  }).promise();

  return Items;
};
