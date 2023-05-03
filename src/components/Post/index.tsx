import React, { FC } from "react";
import PostHeader from "./PostHeader";
import Link from "next/link";
import { IPostResponse } from "@/utils/api/types.api";
import PostActions from "./PostActions";

const PostItem: FC<IPostResponse> = ({
  id,
  title,
  description,
  imageUrl,
  createdAt,
  user,
}) => {
  return (
    <div className="bg-white shadow-sm rounded-xl py-5 flex flex-col gap-2">
      <PostHeader user={user} post={{ id, createdAt }} />

      <Link href={`/posts/${id}`}>
        <div className="flex flex-col gap-3">
          <div className="px-5">
            <div className="text-slate-800 text-2xl font-bold mb-2">
              {title}
            </div>
            <div className="flex flex-col gap-5">
              <p>{description}</p>
            </div>
          </div>

          {imageUrl && (
            <figure>
              <img src={imageUrl} alt={title} width={640} height={400} />
            </figure>
          )}
        </div>
      </Link>

      <div className="px-5">
        <PostActions />
      </div>
    </div>
  );
};

export default PostItem;
