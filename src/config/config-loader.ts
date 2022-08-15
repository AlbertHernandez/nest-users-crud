export const configLoader = () => {
  return {
    port: process.env.PORT,
    apiKey: process.env.API_KEY,
  };
};
