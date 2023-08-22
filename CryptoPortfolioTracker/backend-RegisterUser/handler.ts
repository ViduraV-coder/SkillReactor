import * as aws from "aws-sdk";
import * as awsLambda from "aws-lambda";

import { User } from "./models/user.model";
import * as database from "./services/database.service";

aws.config.loadFromPath("./skillreactor/config.json");

export const handle = async (
  event: awsLambda.APIGatewayEvent,
  _context: awsLambda.Context
) => {
  if (event.body === null || event.body === undefined) {
    return response(400, "Error: No details found");
  }
  const body = JSON.parse(event.body);

  if (
    body.username === "" ||
    body.username === undefined ||
    body.email === "" ||
    body.email === undefined ||
    body.password === "" ||
    body.password === undefined
  ) {
    return response(400, "Error: Details are incorrect");
  }

  const user = new User(body.username, body.email, body.password);

  if (await database.insertUser(user)) {
    return response(200, "Item added Successfully");
  } else {
    return response(400, "Error:Something went wrong!");
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
