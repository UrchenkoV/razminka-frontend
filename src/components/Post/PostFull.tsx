import React, { FC } from "react";
import BaseCategoryLink from "../BaseCategoryLink";
import PostAuthor from "./PostAuthor";
import BaseActionWithIcon from "../BaseActionWithIcon";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import PostActions from "./PostActions";
import BaseButton from "../BaseButton";
import PostFullComments from "./PostFullComments";
import { IPostResponse } from "@/utils/api/types.api";
import dayjs from "dayjs";

const PostFull: FC<{ post: IPostResponse }> = ({ post }) => {
  return (
    <>
      <div className="bg-white py-5 rounded-xl shadow-sm">
        <div className="wrapper-sm flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-5">
              <BaseCategoryLink
                title={"Финансы"}
                href={"#"}
                image={
                  "https://leonardo.osnova.io/39487063-8f15-5633-9230-bff3c060ac29/-/format/webp/"
                }
              />
              <PostAuthor
                fullName={post.user.fullName}
                href={`/profile/${post.user.id}`}
              />
              <div className="text-gray-500 text-sm">
                {dayjs(post.createdAt).format("DD:MM:YYYY H.m.s")}
              </div>
            </div>
          </div>

          <h1 className="text-2xl font-bold">{post.title}</h1>

          <div className="flex justify-between items-center">
            <div className="flex gap-5">
              <BaseActionWithIcon count={post?.countComments}>
                <ChatBubbleOvalLeftIcon className="w-5 h-5" />
              </BaseActionWithIcon>
              <BaseActionWithIcon title="В закладки">
                <BookmarkIcon className="w-5 h-5" />
              </BaseActionWithIcon>
            </div>
            <div className="text-gray-500 text-sm">{post.views} просмотров</div>
          </div>
        </div>

        {post.imageUrl && (
          <div className="w-ful flex justify-center my-5">
            <img src={post.imageUrl} alt={post.title} />
          </div>
        )}

        <div className="flex flex-col gap-5 wrapper-sm my-5 page-wrapper">
          {post.text.map((obj) => {
            if (obj.type === "paragraph") {
              return (
                <p
                  key={obj.id}
                  dangerouslySetInnerHTML={{ __html: obj.data.text }}
                ></p>
              );
            }
          })}
        </div>

        <div className="flex flex-col gap-5 wrapper-sm mt-5">
          <PostActions post={post} />

          <div className="flex justify-between gap-5 items-center">
            <PostAuthor
              fullName={post.user.fullName}
              href={`.profile/${post.user.id}`}
              avatarUrl={post.user.avatarUrl}
              fullInfo
              description={"Пишу интересно про финансы"}
            />
            <div className="">
              <BaseButton color="blue">
                <div className="flex items-center gap-1.5">
                  <UserPlusIcon className="w-6 h-6" /> Подписаться
                </div>
              </BaseButton>
            </div>
          </div>
        </div>
      </div>

      <PostFullComments comments={post.comments} />
    </>
  );
};

export default PostFull;
