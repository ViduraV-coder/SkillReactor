import * as aws from 'aws-sdk';
import * as awsLambda from 'aws-lambda';

aws.config.loadFromPath('./skillreactor/config.json');

export const handle = async (
  event: awsLambda.APIGatewayEvent,
  _context: awsLambda.Context
) => {
  const body = JSON.parse(event.body);

  if (body.username === null || body.username === undefined) {
    return response(400, 'Error');
  }

  if(body.username.length < 5){
    return response(400, 'Error');
  }else{
    return response(200, 'Success');
  }
};

const response = (statusCode: number, body: string )=>{
  return {
    statusCode,
    headers: {
      'Content-Type': '*/*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*'
    },
    body
  };
}
