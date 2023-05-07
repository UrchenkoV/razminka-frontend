import React, { FC } from "react";
import PostHeader from "./PostHeader";
import Link from "next/link";
import { IPostResponse } from "@/utils/api/types.api";
import PostActions from "./PostActions";

const PostItem: FC<{ post: IPostResponse }> = ({ post }) => {
  const [render, setRender] = React.useState(false);
  

  React.useEffect(() => {
    setRender(true);
  }, []);

  return (
    <div className="bg-white shadow-sm rounded-xl py-5 flex flex-col gap-2">
      <PostHeader
        user={post.user}
        post={{ id: post.id, createdAt: post.createdAt }}
      />

      <Link href={`/posts/${post.id}`}>
        <div className="flex flex-col gap-3 page-wrapper">
          <div className="px-5">
            <div className="text-slate-800 text-2xl font-bold mb-2">
              {post.title}
            </div>
            <div className="flex flex-col gap-5">
              {render && (
                <div
                  dangerouslySetInnerHTML={{ __html: post.description }}
                ></div>
              )}
            </div>
          </div>

          {post.imageUrl && (
            <figure>
              <img
                src={post.imageUrl}
                alt={post.title}
                width={640}
                height={400}
              />
            </figure>
          )}
        </div>
      </Link>

      <div className="px-5">
        <PostActions post={post} />
      </div>
    </div>
  );
};

export default PostItem;
