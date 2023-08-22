import { DynamoDBClient, UpdateItemCommand } from "@aws-sdk/client-dynamodb";

import config from "../skillreactor/config.json";

import { User } from "../models/user.model";
import { Asset } from "../models/asset.model";

const credentials = {
  region: config.region,
  credentials: {
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
    skrAccessKey: config.skrAccessKey,
    username: config.username,
  },
};

const ddbClient = new DynamoDBClient(credentials);

export const addAsset = async (user: User, asset: Asset) => {
  const userName = user.getName();
  const tokenName = asset.getToken().toString();
  const tokenQuantity = asset.getQuantity().toString();

  const params = {
    TableName: "CryptoPortfolioTracker-user-tempacc",
    Key: {
      username: { S: userName },
    },
    UpdateExpression: "set #assets.#token = :m",
    ExpressionAttributeNames: {
      "#assets": "assets",
      "#token": tokenName,
    },
    ExpressionAttributeValues: {
      ":m": { M: { quantity: { N: tokenQuantity } } },
    },
  };

  const exceptionParams = {
    TableName: "CryptoPortfolioTracker-user-tempacc",
    Key: {
      username: { S: userName },
    },
    UpdateExpression: "set #assets = :m",
    ExpressionAttributeNames: {
      "#assets": "assets",
    },
    ExpressionAttributeValues: {
      ":m": { M: {} },
    },
  };

  try {
    const data = await ddbClient.send(new UpdateItemCommand(params));
    return data;
  } catch (err) {
    if ("ValidationException" === err.toString().substr(0, 19)) {
      await ddbClient.send(new UpdateItemCommand(exceptionParams));
      const data = await ddbClient.send(new UpdateItemCommand(params));
      return data;
    } else {
      console.log(err);
    }
  }
};

export const deleteAsset = async(user: User, asset: Asset)=>{
  const userName = user.getName();
  const tokenName = asset.getToken().toString();

  const params = {
    TableName: "CryptoPortfolioTracker-user-tempacc",
    Key: {
      username: { S: userName },
    },
    UpdateExpression: "remove #assets.#token",
    ExpressionAttributeNames: {
      "#assets": "assets",
      "#token": tokenName,
    },
  };

  try {
    const data = await ddbClient.send(new UpdateItemCommand(params));
    return data;
  } catch (err) {
      console.log(err);
  }
}
