export interface MovieInfo {
  name: string;
  poster_image: string;
  preview_image: string;
  background_image: string;
  background_color: string;
  description: string;
  rating: number;
  scores_count: number;
  director: string;
  starring: string[];
  run_time: number;
  genre: string;
  released: number;
  id: number;
  is_favorite: boolean;
  video_link: string;
  preview_video_link: string;
}

export interface UserInfo {
  id: number;
  email: string;
  name: string;
  avatar_url: string;
  token: string;
}

interface CommentAuthor {
  id: number;
  name: string;
}

export interface CommentInfo {
  id: number;
  user: CommentAuthor;
  rating: number;
  comment: string;
  date: Date;
}
