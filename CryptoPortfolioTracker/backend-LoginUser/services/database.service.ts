import * as DynamoDB from "@aws-sdk/client-dynamodb";

import  config  from '../skillreactor/config.json'

import { User } from "../models/user.model";

const credentials = {
  region: config.region,
  credentials: {
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
    skrAccessKey: config.skrAccessKey,
    username: config.username
  }
};

const ddbClient = new DynamoDB.DynamoDBClient(credentials);

  export const loginUser = async (user: User) => {

    var params = {
      TableName: "CryptoPortfolioTracker-user-tempacc",
      Key: {
        username: { S: user.getName() }
      },
      ProjectionExpression: "password",
    };

    try{
      const data = await ddbClient.send(new DynamoDB.GetItemCommand(params));
      return data;
    } catch (err){
      console.log(err);
    }

  };
