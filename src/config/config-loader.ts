export const configLoader = () => {
  return {
    port: process.env.PORT,
    apiKey: process.env.API_KEY,
    environment: process.env.NODE_ENV,
    sentry: {
      dsn: process.env.SENTRY_DSN,
      enabled: process.env.SENTRY_ENABLED === 'true',
    },
    mongo: {
      uri: process.env.MONGO_URI,
    },
  };
};
