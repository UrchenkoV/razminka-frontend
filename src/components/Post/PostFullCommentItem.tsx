import React, { FC } from "react";
import Link from "next/link";
import BaseActionWithIcon from "../BaseActionWithIcon";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import PostFullCommentInput from "./PostFullCommentInput";
import { ICommentItem } from "@/utils/api/types.api";
import dayjs from "dayjs";

const PostFullCommentItem: FC<{ comment: ICommentItem }> = ({ comment }) => {
  const [commentVale, setCommentValue] = React.useState("");
  const [isOpenAddComment, setIsOpenAddComment] = React.useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <Link href={`/profile/${comment.user.id}`}>
          <div className="w-9 h-9 rounded-full overflow-hidden">
            <img src={comment.user.avatarUrl} alt={comment.user.fullName} />
          </div>
        </Link>
        <div className="">
          <Link
            href={`/profile/${comment.user.id}`}
            className="font-bold hover:text-blue-500 duration-300"
          >
            {comment.user.fullName}
          </Link>
          <div className="text-xs to-gray-400">
            {dayjs(comment.createdAt).format("DD.MM.YYYY H:m")}
          </div>
        </div>
      </div>

      <div className="">{comment.text}</div>

      <div className="flex items-center gap-4">
        <BaseActionWithIcon color="red" count={11}>
          <HandThumbUpIcon className="w-5 h-5" />
        </BaseActionWithIcon>
        <div
          onClick={() => setIsOpenAddComment(true)}
          className="hover:text-blue-700 text-sm duration-300 text-gray-500 cursor-pointer"
        >
          Ответить
        </div>
      </div>

      {isOpenAddComment && (
        <div className="mt-1 ml-5">
          <PostFullCommentInput
            value={commentVale}
            onChange={(e) => setCommentValue(e.target?.value)}
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
