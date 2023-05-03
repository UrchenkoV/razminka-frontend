import React, { FC, Fragment } from "react";
import Link from "next/link";
import BaseActionWithIcon from "../BaseActionWithIcon";
import {
  EllipsisHorizontalIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import PostFullCommentInput from "./PostFullCommentInput";
import { ICommentItem } from "@/utils/api/types.api";
import dayjs from "dayjs";
import { Popover, Transition } from "@headlessui/react";
import { Api } from "@/utils/api";

const PostFullCommentItem: FC<{ comment: ICommentItem }> = ({ comment }) => {
  const [commentVale, setCommentValue] = React.useState("");
  const [isOpenAddComment, setIsOpenAddComment] = React.useState(false);
  const [deleted, setDeleted] = React.useState(false);

  const onDelete = async () => {
    try {
      const data = await Api().comment.delete(comment.id);
      console.log(data);
      setDeleted(true);
    } catch (err) {
      console.warn("Comment delete.", err);
    }
  };

  if (deleted) {
    return (
      <div className="flex justify-center py-3 px-5">Комментарий удалён.</div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href={`/profile/${comment.user.id}`}>
            <div className="w-9 h-9 rounded-full overflow-hidden">
              <img src={comment.user.avatarUrl} alt={comment.user.fullName} />
            </div>
          </Link>
          <div>
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

        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className={`focus:outline-none`}>
                <BaseActionWithIcon color="gray">
                  <EllipsisHorizontalIcon
                    className={`h-5 w-5`}
                    aria-hidden="true"
                  />
                </BaseActionWithIcon>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-1 w-screen max-w-[150px] -translate-x-1/20 transform">
                  <div className="overflow-hidden rounded-md shadow-sm border border-gray-100">
                    <div className="relative grid gap-1 bg-white p-1 text-sm text-gray-600">
                      <div
                        onClick={onDelete}
                        className="hover:bg-gray-50 cursor-pointer duration-300 py-1 px-2 rounded-md"
                      >
                        Удалить
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>

      <div className="">{comment.text}</div>

      {/* <div className="flex items-center gap-4">
        <BaseActionWithIcon color="red" count={11}>
          <HandThumbUpIcon className="w-5 h-5" />
        </BaseActionWithIcon>
        <div
          onClick={() => setIsOpenAddComment(true)}
          className="hover:text-blue-700 text-sm duration-300 text-gray-500 cursor-pointer"
        >
          Ответить
        </div>
      </div> */}

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
