import * as aws from "aws-sdk";
import * as awsLambda from "aws-lambda";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

import { User } from "./models/user.model";
import * as database from "./services/database.service";

aws.config.loadFromPath("./skillreactor/config.json");
dotenv.config();

export const handle = async (
  event: awsLambda.APIGatewayEvent,
  context: awsLambda.Context
) => {
  if (event.body == null || event.body == undefined) {
    return response(400, "Not a valid input");
  }

  const body = JSON.parse(event.body);
  const user = new User(body.username, body.password);
  const dbResponse = await database.loginUser(user);

  if (
    dbResponse == null ||
    dbResponse == undefined ||
    JSON.stringify(dbResponse) == "{}"
  ) {
    return response(400, "DB Error");
  }

  if (dbResponse.Item == undefined || JSON.stringify(dbResponse.Item) == "{}") {
    return response(401, "Cant find the user");
  }

  if (dbResponse.Item.password.S === user.getPassword()) {
    return response(
      201,
      jwt.sign({ username: user.getName() }, process.env.JWT_KEY)
    );
  } else {
    return response(401, "Incorrect password");
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
