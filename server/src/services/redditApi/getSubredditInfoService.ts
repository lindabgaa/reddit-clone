import config from "@/config/config.js";
import { ISubreddit } from "@/types/Subreddit.js";
import formatSubreddit, { IApiSubredditData } from "@/utils/formatSubreddit.js";
import axios from "axios";

const { baseUrl, userAgent } = config.redditApi;

interface IApiResponse {
  data: IApiSubredditData;
}

export default async (accessToken: string, name: string): Promise<ISubreddit | null> => {
  const url = `${baseUrl}/r/${name}/about`;

  const response = await axios.get<IApiResponse>(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "User-Agent": userAgent,
    },
  });

  if (!response.data?.data) {
    return null;
  }

  return formatSubreddit(response.data.data);
};
