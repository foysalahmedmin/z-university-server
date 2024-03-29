import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  default_password: process.env.DEFAULT_PASSWORD,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_access_secret_expires_in: process.env.JWT_ACCESS_SECRET_EXPIRES_IN,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_refresh_secret_expires_in: process.env.JWT_REFRESH_SECRET_EXPIRES_IN,
  reset_password_ui_link: process.env.RESET_PASSWORD_UI_LINK,
  auth_user_email: process.env.AUTH_USER_EMAIL,
  auth_user_email_password: process.env.AUTH_USER_EMAIL_PASSWORD,
};
