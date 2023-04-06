import {
  BookmarkIcon,
  ChatBubbleOvalLeftIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const PostFooter = () => {
  return (
    <div className="px-5 flex justify-between gap-2">
      <div className="flex gap-2">
        <div className="flex items-center gap-0.5 text-slate-700 cursor-pointer group">
          <div className="p-1.5 group-hover:bg-red-100 group-hover:text-red-500 rounded-full duration-300">
            <HandThumbUpIcon className="w-5 h-5" />
          </div>

          <span className="text-sm group-hover:text-red-500 duration-300">
            33
          </span>
        </div>

        <div className="flex items-center gap-1 text-slate-700 cursor-pointer group">
          <div className="p-1.5 group-hover:bg-red-100 group-hover:text-red-500 rounded-full duration-300">
            <HandThumbDownIcon className="w-5 h-5" />
          </div>

          <span className="text-sm group-hover:text-red-500 duration-300">
            2
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex items-center gap-1 text-slate-700 cursor-pointer group">
          <div className="p-1.5 group-hover:bg-blue-100 group-hover:text-blue-500 rounded-full duration-300">
            <ChatBubbleOvalLeftIcon className="w-5 h-5" />
          </div>

          <span className="text-sm group-hover:text-blue-500 duration-300">
            7
          </span>
        </div>

        <div
          className="flex items-center gap-1 text-slate-700 cursor-pointer group"
          title="Опубликовать от себя"
        >
          <div className="p-1.5 group-hover:bg-blue-100 group-hover:text-blue-500 rounded-full duration-300">
            <ShareIcon className="w-5 h-5" />
          </div>

          <span className="text-sm group-hover:text-blue-500 duration-300">
            2
          </span>
        </div>

        <div className="text-slate-700 cursor-pointer group">
          <div className="p-1.5 group-hover:bg-blue-100 group-hover:text-blue-500 rounded-full duration-300">
            <BookmarkIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostFooter;
