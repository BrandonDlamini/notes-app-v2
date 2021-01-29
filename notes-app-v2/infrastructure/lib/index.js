import DynamoDBStack from "./DynamoDBStack";
import S3Stack from "./S3Stack";
import CognitoStack from "./CognitoStack";
// Add stacks
export default function main(app) {
  new DynamoDBStack(app, "dynamodb");

  new S3Stack(app, "s3");

  new CognitoStack(app, "coginito");
}