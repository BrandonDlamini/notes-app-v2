export default {
  MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-uploads-v2"
    },
    apiGateway: {
      REGION: "Yus-east-2",
      URL: "https://yg95cyoie9.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_zr3nJoakt",
      APP_CLIENT_ID: "38ggr7jjhgnnh1cg825vog7e3i",
      IDENTITY_POOL_ID: "us-east-2:a00b7213-37fc-4520-bdbc-658ed2182fb8"
    }
  };
  