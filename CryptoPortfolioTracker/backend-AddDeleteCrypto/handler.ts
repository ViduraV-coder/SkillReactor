import * as aws from "aws-sdk";
import * as awsLambda from "aws-lambda";

import { User } from "./models/user.model";
import { Asset } from "./models/asset.model";
import * as database from "./services/database.service";

aws.config.loadFromPath("./skillreactor/config.json");

export const handle = async (
  event: awsLambda.APIGatewayEvent,
  _context: awsLambda.Context
) => {
  if (
    event.body === null ||
    event.body === undefined ||
    JSON.stringify(event.body) === ""
  ) {
    return response(400, "Error: No data");
  }

  const body = JSON.parse(event.body);
  if (
    body.username === null ||
    body.username === "" ||
    body.username === undefined
  ) {
    return response(400, "Error: No username");
  }

  const user = new User(body.username);
  let dbResponse;

  if (body.action) {
    const asset = new Asset(body.token, null);
    dbResponse = await database.deleteAsset(user, asset);
  } else {
    const asset = new Asset(body.token, body.quantity);
    dbResponse = await database.addAsset(user, asset);
  }

  if (dbResponse.$metadata.httpStatusCode === 200) {
    return response(200, "Sucess");
  } else {
    return response(400, "Error");
  }
};

const response = (statusCode: number, body: string) => {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
    },
    body,
  };
};
