import {
  BookmarkIcon,
  ChatBubbleOvalLeftIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import React, { FC } from "react";
import BaseActionWithIcon from "../BaseActionWithIcon";
import { IPostResponse } from "@/utils/api/types.api";
import Link from "next/link";

const PostActions: FC<{ post: IPostResponse }> = ({ post }) => {
  return (
    <div className="flex justify-between gap-2">
      <div className="flex gap-2">
        <BaseActionWithIcon count={33} color="red">
          <HandThumbUpIcon className="w-5 h-5" />
        </BaseActionWithIcon>

        <BaseActionWithIcon count={1} color="red">
          <HandThumbDownIcon className="w-5 h-5" />
        </BaseActionWithIcon>
      </div>

      <div className="flex gap-2">
        <Link href={`/posts/${post.id}#comments`}>
          <BaseActionWithIcon count={post?.countComments}>
            <ChatBubbleOvalLeftIcon className="w-5 h-5" />
          </BaseActionWithIcon>
        </Link>

        <BaseActionWithIcon count={2} title="Опубликовать от себя">
          <ShareIcon className="w-5 h-5" />
        </BaseActionWithIcon>

        <BaseActionWithIcon title="В закладки">
          <BookmarkIcon className="w-5 h-5" />
        </BaseActionWithIcon>
      </div>
    </div>
  );
};

export default PostActions;
