import * as Joi from 'joi';

export const envSchema = Joi.object({
  PORT: Joi.string().default(3000),
  API_KEY: Joi.string().required(),
  NODE_ENV: Joi.string().default('development'),
  SENTRY_DSN: Joi.string().required(),
  SENTRY_ENABLED: Joi.string().default('false').allow('true', 'false'),
});
