export default {
	MAX_ATTACHMENT_SIZE: 5000000,
	STRIPE_KEY: "pk_test_51H617NDPMZ08jVj9s7eXWT9Zb3XvgsnFQ9ViMnz8SZthtSarlSU1e42116dML47L8aG1B123vvrsX5j55GWcO26s00QUydrQol",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-gsb"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://ziwr9enpek.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_87g21kUQy",
    APP_CLIENT_ID: "7a2epbo6213esegol0lqk5s22a",
    IDENTITY_POOL_ID: "us-east-2:d4abd76e-7114-435e-abe1-d702e5534da9"
  }
};