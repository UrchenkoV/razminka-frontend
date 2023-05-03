import { PostHeaderType } from "@/utils/api/types.api";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import BaseActionWithIcon from "../BaseActionWithIcon";
import { PencilIcon } from "@heroicons/react/24/outline";

const PostHeader: FC<PostHeaderType> = ({ user, post }) => {
  return (
    <div className="flex items-center justify-between px-5">
      <div className="flex items-center gap-2">
        <Link
          href={`/profile/${user.id}`}
          className="group flex items-center gap-2"
        >
          <div className="">
            <Image
              src={user.avatarUrl}
              alt={user.fullName}
              width={35}
              height={35}
            />
          </div>
          <div className="text-base font-bold text-slate-900 group-hover:text-blue-500 duration-300">
            {user.fullName}
          </div>
        </Link>

        <div className="text-sm text-slate-500">
          {dayjs(post.createdAt).format("DD.MM.YYYY HH:mm")}
        </div>
      </div>

      <Link href={`/sozdat/${post.id}`}>
        <BaseActionWithIcon>
          <PencilIcon className="w-4 h-4" />
        </BaseActionWithIcon>
      </Link>
    </div>
  );
};

export default PostHeader;
