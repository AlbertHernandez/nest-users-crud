import { configLoader } from './config-loader';
import { envSchema } from './env-schema';

export const configOptions = {
  load: [configLoader],
  validationSchema: envSchema,
};
