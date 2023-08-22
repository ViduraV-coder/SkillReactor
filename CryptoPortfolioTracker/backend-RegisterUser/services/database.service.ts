import {DynamoDBClient, PutItemCommand} from "@aws-sdk/client-dynamodb";
import * as config from "../skillreactor/config.json";

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

const ddbClient = new DynamoDBClient(credentials);

  export const insertUser = async (user: User) => {

    var params = {
      TableName: "CryptoPortfolioTracker-user-vidura",
      Item: {
        username: { S: user.getName() },
        email: { S: user.getEmail() },
        password: { S: user.getPassword() },
      },
      ReturnConsumedCapacity: "TOTAL",
    };

    try {
      const data = await ddbClient.send(new PutItemCommand(params));
      console.log(data);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };
