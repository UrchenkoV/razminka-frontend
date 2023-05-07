import React, { FC, forwardRef } from "react";

import PostFullCommentItem from "./PostFullCommentItem";
import PostFullCommentInput from "./PostFullCommentInput";
import { ICommentItem } from "@/utils/api/types.api";
import { sklonenie } from "@/utils/sklonenie";
import { Api } from "@/utils/api";
import { useRouter } from "next/router";
import { selectUser } from "@/redux/user/userSlice";
import { useSelector } from "react-redux";

type PostFullCommentsProps = {
  comments?: ICommentItem[];
};

const PostFullComments = forwardRef<HTMLDivElement, PostFullCommentsProps>(
  ({ comments = [] }, ref) => {
    const router = useRouter();
    const user = useSelector(selectUser);
    const [comment, setComment] = React.useState("");

    const onSave = async () => {
      try {
        const id = router.query?.id;

        if (!id) return;

        const data = await Api().comment.create({
          text: comment,
          postId: +id,
        });

        Object.assign(data, user);

        comments.unshift(data);
        setComment("");
      } catch (err) {
        console.warn("Create comment.", err);
      }
    };

    return (
      <div
        ref={ref}
        id="comments"
        className="bg-white pt-10 pb-5 rounded-xl shadow-sm"
      >
        <div className="wrapper-sm">
          <h2 className="text-xl font-medium mb-7">
            {[comments.length]}{" "}
            {sklonenie(comments.length, [
              "комментарий",
              "комментария",
              "комментариев",
            ])}
          </h2>

          {user.user ? (
            <PostFullCommentInput
              value={comment}
              placeholder="Написать комметарий..."
              onChange={(e) => setComment(e.target.value)}
              onClick={onSave}
            />
          ) : (
            <div className="text-center">
              Войдите, чтобы написать комментарий.
            </div>
          )}

          <div className="mt-5 flex flex-col gap-5">
            {comments.map((obj) => (
              <PostFullCommentItem key={obj.id} comment={obj} />
            ))}
          </div>
        </div>
      </div>
    );
  }
);

export default PostFullComments;
