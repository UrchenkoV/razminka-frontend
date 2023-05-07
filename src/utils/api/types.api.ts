import { OutputData } from "@editorjs/editorjs";

export type UserResponse = {
  id: number;
  email: string;
  fullName: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
  accessToken: string;
};

export interface ICommentItem {
  id: number;
  text: string;
  user: UserResponse;
  post: IPostResponse;
  createdAt: string;
  updatedAt: string;
}

export type CommentCreateDto = {
  text: string;
  postId: number;
};

export type CommentsUpdateDto = Pick<CommentCreateDto, "text">;

export interface IPostResponse {
  id: number;
  title: string;
  text: OutputData["blocks"];
  description: string;
  views: number;
  comments?: ICommentItem[];
  createdAt: string;
  updatedAt: string;
  imageUrl: null | string;
  user: Pick<UserResponse, "id" | "fullName" | "avatarUrl">;
  countComments?: number;
}

export type PostHeaderType = {
  user: Pick<UserResponse, "id" | "fullName" | "avatarUrl">;
  post: Pick<IPostResponse, "id" | "createdAt">;
};

export interface PostCreateDto {
  title: string;
  text: OutputData["blocks"];
}
