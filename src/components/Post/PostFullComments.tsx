import React, { FC } from "react";

import { comments } from "./data";
import PostFullCommentItem from "./PostFullCommentItem";
import PostFullCommentInput from "./PostFullCommentInput";

const PostFullComments: FC = () => {
  const [comment, setComment] = React.useState("");

  return (
    <div className="bg-white pt-10 pb-5 rounded-xl shadow-sm">
      <div className="wrapper-sm">
        <h2 className="text-xl font-medium mb-7">33 комментария</h2>

        <PostFullCommentInput
          value={comment}
          placeholder="Написать комметарий..."
          onChange={(e) => setComment(e.target.value)}
        />

        <div className="mt-5 flex flex-col gap-5">
          {comments.map((obj) => (
            <PostFullCommentItem
              key={obj.id}
              id={obj.id}
              text={obj.text}
              likesCount={obj.likesCount}
              createdAt={obj.createdAt}
              user={obj.user}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostFullComments;
