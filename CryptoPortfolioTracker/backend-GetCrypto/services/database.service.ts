import * as DynamoDB from "@aws-sdk/client-dynamodb";

import config from "../skillreactor/config.json";

import { User } from "../models/user.model";
import { getCoinList, getCoinPrice } from "../services/coingeko.service";

const credentials = {
  region: config.region,
  credentials: {
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
    skrAccessKey: config.skrAccessKey,
    username: config.username,
  },
};

const ddbClient = new DynamoDB.DynamoDBClient(credentials);

export const getItems = async (user: User) => {
  const tokenList = await getCoinList();

  var params = {
    TableName: "CryptoPortfolioTracker-user-tempacc",
    Key: {
      username: { S: user.getName() },
    },
    ProjectionExpression: "assets",
  };

  try {
    const data = await ddbClient.send(new DynamoDB.GetItemCommand(params));
    const keys = Object.keys(data.Item.assets.M);
    const values = Object.values(data.Item.assets.M);

    let finalArray = [];
    let tokenPriceList = [];
    let priceOfAllTokens = 0;
    let x = 0;

    for await (const k of keys) {
      let tokenId: string;

      for await (const t of tokenList) {
        if (t.name.toLowerCase() == k.toLowerCase()) {
          tokenId = t.id;
          break;
        }
      }

      const tokenPrice = await getCoinPrice(tokenId);
      const tokenValue = values[x].M.quantity.N;

      const temp1 = Object.values(tokenPrice);
      const temp2 = Object.values(temp1[0]);

      const finalPrice = +temp2 * +tokenValue;

      tokenPriceList.push(+temp2);
      priceOfAllTokens = priceOfAllTokens + finalPrice;

      x++;
    }

    x = 0;

    for await (const k of keys) {
      const tokenValue = values[x].M.quantity.N;
      const finalPrice = +tokenPriceList[x] * +tokenValue;
      const allocation = (+finalPrice / priceOfAllTokens) * 100;

      const jsonObject = {
        token: k,
        quantity: +tokenValue,
        totalValue: +Math.round(finalPrice).toFixed(0),
        price: +tokenPriceList[x],
        allocation: +Math.round(allocation).toFixed(0),
      };
      finalArray.push(jsonObject);
      x++;
    }

    x = 0;

    return finalArray;
  } catch (err) {
    console.log(err);
  }
};
