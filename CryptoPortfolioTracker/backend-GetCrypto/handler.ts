import * as aws from "aws-sdk";
import * as awsLambda from "aws-lambda";
import { User } from "./models/user.model";
import { getItems } from "./services/database.service";

aws.config.loadFromPath("./skillreactor/config.json");

export const handle =  async (
  event: awsLambda.APIGatewayEvent,
  context: awsLambda.Context
) => {
  if(event.queryStringParameters === null || event.queryStringParameters === undefined){
    return response(400, "Error: No data found");
  }
  const username = event.queryStringParameters.username;

  if (username === null || username === undefined || username === '') {
    return response(400, "Error: Invalid inputs");
  }
  const user = new User(username);
  const dbResponse =  await getItems(user);
  return response(200, JSON.stringify(dbResponse));   
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
