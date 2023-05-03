import { GetServerSidePropsContext, NextPageContext } from "next/types";
import { UserApi } from "./user.api";
import Cookies, { parseCookies } from "nookies";
import axios from "axios";
import { PostApi } from "./post.api";
import { CommentApi } from "./comment.api";

export type ApiReturnType = {
  user: ReturnType<typeof UserApi>;
  post: ReturnType<typeof PostApi>;
  comment: ReturnType<typeof CommentApi>;
};

export const Api = (
  ctx?: NextPageContext | GetServerSidePropsContext
): ApiReturnType => {
  const cookies = ctx ? Cookies.get(ctx) : parseCookies();
  const token = cookies.accessToken;

  const instance = axios.create({
    baseURL: "http://localhost:7000/api",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    user: UserApi(instance),
    post: PostApi(instance),
    comment: CommentApi(instance),
  };
};
