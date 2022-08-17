import * as Joi from 'joi';

export const envSchema = Joi.object({
  PORT: Joi.string().default(3000),
  API_KEY: Joi.string().required(),
  NODE_ENV: Joi.string().default('development'),
});
