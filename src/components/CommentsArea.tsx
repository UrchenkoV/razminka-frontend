import Link from "next/link";
import React, { FC } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { ICommentItem } from "@/utils/api/types.api";
import { Api } from "@/utils/api";
import dayjs from "dayjs";

const CommentsArea: FC = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [comments, setComments] = React.useState<ICommentItem[]>([]);

  const getComments = async () => {
    try {
      const data = await Api().comment.getAll();
      setComments(data);
      console.log(data, "get comments");
    } catch (err) {
      console.warn("Get comments right sidebar.", err);
    }
  };

  React.useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="pl-4 pr-10 max-w-xs h-full sticky top-14">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "my-8 text-gray-800 text-lg font-medium flex items-center gap-4 cursor-pointer",
          !isOpen && "absolute -rotate-90 right-0 top-24 w-20"
        )}
      >
        <span>Комментарии</span>
        <div>
          <ChevronRightIcon
            className={clsx("w-4 h-4", !isOpen && "-rotate-90")}
          />
        </div>
      </div>

      <ul className={clsx("flex flex-col gap-5", !isOpen && "hidden")}>
        {comments.map((item) => (
          <li key={item.id} className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Link
                href={`/profile/${item.user.id}`}
                className="group flex items-center gap-2"
              >
                <div className="w-9 h-9 rounded-xl overflow-hidden">
                  <img src={item.user.avatarUrl} alt={item.user.fullName} />
                </div>
                <div className="text-base font-bold text-gray-700 group-hover:text-blue-500 duration-300">
                  {item.user.fullName}
                </div>
              </Link>

              <Link
                href={`/posts/${item.post.id}#${item.id}`}
                className="text-xs text-gray-500"
              >
                {dayjs(item.createdAt).format("H:m")}
              </Link>
            </div>

            <div className="text-base">{item.text}</div>

            <Link
              href={`/posts/${item.post.id}`}
              className="text-base font-bold text-gray-700 hover:text-blue-500 duration-300"
            >
              {item.post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsArea;
