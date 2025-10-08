// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    SSO_PROD: string;
    USER_EMAIL: string;
    USER_PASSWORD: string;
  }
}