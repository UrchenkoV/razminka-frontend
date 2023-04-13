import Link from "next/link";
import React, { FC } from "react";

interface IPostAuthor {
  fullName: string;
  href: string;
  fullInfo?: boolean;
  avatarUrl?: string;
  description?: string;
}

const PostAuthor: FC<IPostAuthor> = ({
  fullName,
  href,
  fullInfo,
  avatarUrl,
  description,
}) => {
  if (fullInfo) {
    return (
      <div className="flex items-center gap-3">
        <Link href={href}>
          <div className="rounded-full w-10 h-10 overflow-hidden">
            <img src={avatarUrl} alt={fullName} className="w-10 h-10" />
          </div>
        </Link>

        <div className="flex flex-col">
          <Link href={href} className="font-bold">
            {fullName}
          </Link>
          <div className="text-gray-5000 text-sm">{description}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <Link href={href}>{fullName}</Link>
    </div>
  );
};

export default PostAuthor;
