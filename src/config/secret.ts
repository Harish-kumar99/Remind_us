import { config as dotenvConfig } from "dotenv";
dotenvConfig();

export const ENVIRONMENT = process.env.NODE_ENV;

export const TYPEORM_CONNECTION = process.env.TYPEORM_HOST;
export const TYPEORM_HOST = process.env.TYPEORM_HOST;
export const TYPEORM_USERNAME = process.env.TYPEORM_USERNAME;
export const TYPEORM_PASSWORD = process.env.TYPEORM_PASSWORD;
export const TYPEORM_DATABASE = process.env.TYPEORM_DATABASE;
export const TYPEORM_PORT = process.env.TYPEORM_PORT;
export const TYPEORM_LOGGING = process.env.TYPEORM_LOGGING;
export const TYPEORM_ENTITIES = process.env.TYPEORM_ENTITIES;
export const TYPEORM_ENTITIES_DIR = process.env.TYPEORM_ENTITIES_DIR;
export const TYPEORM_MIGRATIONS = process.env.TYPEORM_MIGRATIONS;
export const TYPEORM_MIGRATIONS_DIR = process.env.TYPEORM_MIGRATIONS_DIR;

export const SWAGGER_URL = process.env.SWAGGER_URL;
export const SENTRY_DSN = process.env.SENTRY_DSN;
export const PORT = process.env.PORT;
export const JWT_SECRET = process.env.JWT_SECRET;

export const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
export const AWS_REGION = process.env.AWS_REGION;

export const FROM_EMAIL = process.env.FROM_EMAIL;
export const EMAIL_APP_PASSWORD = process.env.EMAIL_APP_PASSWORD;
export const AWS_SES_API_VERSION = process.env.AWS_SES_API_VERSION;

export const TIMEZONE = process.env.TIMEZONE;

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
export const SIB_API_KEY = process.env.SIB_API_KEY;
export const FIXTURE_CRON_SCHEDULE = process.env.FIXTURE_CRON_SCHEDULE;
export const SLACKTOKEN = process.env.SLACKTOKEN;

