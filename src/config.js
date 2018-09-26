const dev = {
  STRIPE_KEY: "pk_test_hhQxTXh35W6WuA8BpkiV4HSR",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1rx6qbtipfqsd"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://30uxiswwqh.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_LhM0lDHLg",
    APP_CLIENT_ID: "55lrugtdkn1uvpktm0bdkndh2l",
    IDENTITY_POOL_ID: "us-east-1:bfe6e595-c880-44fd-898c-6e80269e2ee9"
  }
};
const prod = {
  STRIPE_KEY: "pk_test_hhQxTXh35W6WuA8BpkiV4HSR",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-vbbu03d9pgzx"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://jvkg0pnd5c.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_vWzNDcq1H",
    APP_CLIENT_ID: "619enn9lmuhokh5pausgbf543",
    IDENTITY_POOL_ID: "us-east-1:b50a5a09-a156-41b4-a846-68f24ec25cba"
  }
};
// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;
export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};