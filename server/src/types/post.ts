export interface IPost {
  subreddit: {
    id: string;
    name: string;
  };
  title: string;
  author: string;
  created: number;
  ups: number;
  comments: {
    num: number;
  };
  content: {
    hint: string;
    isVideo: boolean;
    text: string;
    url: string;
    thumbnail: string;
  };
}
