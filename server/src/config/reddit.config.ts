import dotenvSafe from "dotenv-safe";
dotenvSafe.config();

import config from "@/config/app.config.js";

interface RedditConfig {
  clientID: string;
  clientSecret: string;
  callbackURL: string;
  userAgent: string;
  baseUrl: string;
  scope: string[];
}

const redditConfig: RedditConfig = {
  clientID: process.env.REDDIT_API_CLIENT_ID as string,
  clientSecret: process.env.REDDIT_API_CLIENT_SECRET as string,
  callbackURL: `${config.serverUrl}/api/v1/auth/reddit/callback` as string,
  userAgent: process.env.REDDIT_API_USER_AGENT as string,
  baseUrl: "https://oauth.reddit.com",
  scope: ["read", "identity", "vote", "submit"],
};

export default redditConfig;
