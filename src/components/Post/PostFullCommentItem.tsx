import React, { FC } from "react";
import { IPostCommentItem } from "./types";
import Link from "next/link";
import BaseActionWithIcon from "../BaseActionWithIcon";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import PostFullCommentInput from "./PostFullCommentInput";

const PostFullCommentItem: FC<IPostCommentItem> = ({
  id,
  text,
  likesCount,
  createdAt,
  user,
}) => {
  const [comment, setComment] = React.useState("");
  const [isOpenAddComment, setIsOpenAddComment] = React.useState(false);

  return (
    <div className="">
      <div className="flex items-center gap-3">
        <Link href={`${user.id}`}>
          <div className="w-9 h-9 rounded-full overflow-hidden">
            <img src={user.avatarUrl} alt={user.fullName} />
          </div>
        </Link>
        <div className="">
          <Link
            href={`${user.id}`}
            className="font-bold hover:text-blue-500 duration-300"
          >
            {user.fullName}
          </Link>
          <div className="text-sm to-gray-400">{createdAt}</div>
        </div>
      </div>

      <div className="">{text}</div>

      <div className="flex items-center gap-4">
        <BaseActionWithIcon color="red" count={likesCount}>
          <HandThumbUpIcon className="w-5 h-5" />
        </BaseActionWithIcon>
        <div
          onClick={() => setIsOpenAddComment(true)}
          className="hover:text-blue-700 duration-300 text-gray-500 cursor-pointer"
        >
          Ответить
        </div>
      </div>

      {isOpenAddComment && (
        <div className="mt-1 ml-5">
          <PostFullCommentInput
            value={comment}
            onChange={(e) => setComment(e.target?.value)}
            placeholder="Написать ответ..."
            closeBtn="Отмена"
            onClose={() => setIsOpenAddComment(false)}
          />
        </div>
      )}
    </div>
  );
};

export default PostFullCommentItem;
